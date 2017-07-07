<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use App\Titulo;
use Illuminate\Http\Request;

class ApiController extends Controller
{

    /**
     * @var UserRepository
     */
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function user()
    {
        return $this->currentUser();
    }

    /**
     * Display a listing of the resource.
     *
     */
    public function titulos()
    {
        return $this->currentUser()->titulos;
    }

    public function storeTitulo(Request $request){

        $this->validate($request, [
            'valor'=> 'required',
            'vencimento'=>'required|date'
        ]);

        $user = $this->currentUser();
        return $user->titulos()->create($request->only('valor', 'vencimento'));

    }

    public function destroyTitulo(Titulo $titulo){
        $user = $this->currentUser();


        if($user->id == $titulo->user->id && $titulo->delete()){

            return;
        }else{
            abort(422);
        }
    }

    public function currentUser(){
        return $this->userRepository->getById(1);
    }

}
