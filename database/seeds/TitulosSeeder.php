<?php

use Illuminate\Database\Seeder;

class TitulosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0 ; $i < 10; $i++){
            \App\Titulo::create([
                'user_id' => '1',
                'vencimento' => Carbon\Carbon::now(),
                'valor' => (($i + 1) * 10)
            ]);
        }
    }
}
