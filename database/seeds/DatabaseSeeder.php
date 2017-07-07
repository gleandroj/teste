<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'nome' => 'Bruno Vinicius Stersa',
            'cpf' => '030.160.261.80',
            'envolvimento' => 'Envolvimento 6.6',
            'email' => 'bruno.stersa@gmail.com',
            'ultimo_envolvimento' => \Carbon\Carbon::now(),
            'url_imagem' => 'http://www.gadoo.com.br/wp-content/uploads/2014/06/1169.jpg',
            'password' => bcrypt('password')
        ]);
    }
}
