<?php

namespace App\Repositories;

use App\User;

class UserRepository
{
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var \Illuminate\Database\Eloquent\Model|User
     */
    protected $model;

    /**
     * AbstractRepository constructor.
     * @param $model
     */
    public function __construct(User $model)
    {
        $this->model = $model;
    }

    /**
     * @return mixed
     */
    public function getAll()
    {
        return $this->model->get();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getById($id)
    {
        return $this->model->where('id', $id)->first();
    }

    /**
     * @param array $data
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function create(array $data)
    {
        $newModel = $this->model->create($data);
        return $newModel;
    }

    /**
     * @param $id
     * @param array $data
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function update($id, array $data)
    {
        $model = $this->getById($id);

        if($model->update($data)){
            return $model;
        }
    }

    /**
     * @param $id
     * @return bool|null
     */
    public function delete($id)
    {
        $user = $this->getById($id);

        if($user->delete()){
            return $user;
        }
    }

    /**
     * @param $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function restore($id)
    {

        if($this->model->where('id', $id)->restore()){
            return $this->getById($id);
        }
    }
}