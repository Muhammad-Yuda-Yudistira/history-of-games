<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PlatformController extends Controller
{
    public function show () {
        return Inertia::render('Platform/Index', [
            'titlePage' => 'Platform'
        ]);
    }
}
