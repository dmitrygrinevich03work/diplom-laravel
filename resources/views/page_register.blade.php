@extends('layouts.layout_no_menu')

@section('title')
    <title>Registration</title>
@endsection

@section('style')
    <link id="vendorsbundle" rel="stylesheet" media="screen, print" href="css/vendors.bundle.css">
    <link id="appbundle" rel="stylesheet" media="screen, print" href="css/app.bundle.css">
    <link id="mytheme" rel="stylesheet" media="screen, print" href="#">
    <link id="myskin" rel="stylesheet" media="screen, print" href="css/skins/skin-master.css">
    <!-- Place favicon.ico in the root directory -->
    <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon-32x32.png">
    <link rel="mask-icon" href="img/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="stylesheet" media="screen, print" href="css/fa-brands.css">
@endsection

@section('body-content')
    <body>
    <div class="page-wrapper auth">
        <div class="page-inner bg-brand-gradient">
            <div class="page-content-wrapper bg-transparent m-0">
                <div class="height-10 w-100 shadow-lg px-4 bg-brand-gradient">
                    <div class="d-flex align-items-center container p-0">
                        <div
                            class="page-logo width-mobile-auto m-0 align-items-center justify-content-center p-0 bg-transparent bg-img-none shadow-0 height-9 border-0">
                            <a href="javascript:void(0)"
                               class="page-logo-link press-scale-down d-flex align-items-center">
                                <img src="img/logo.png" alt="SmartAdmin WebApp" aria-roledescription="logo">
                                <span class="page-logo-text mr-1">Educational project</span>
                            </a>
                        </div>
                        <span class="text-white opacity-50 ml-auto mr-2 hidden-sm-down">
                            Already registered?
                        </span>
                        <a href="{{ route('login') }}" class="btn-link text-white ml-auto ml-sm-0">
                            Sign In
                        </a>
                    </div>
                </div>
                <div class="flex-1"
                     style="background: url(img/svg/pattern-1.svg) no-repeat center bottom fixed; background-size: cover;">
                    <div class="container py-4 py-lg-5 my-lg-5 px-4 px-sm-0">
                        <div class="row">
                            <div class="col-xl-12">
                                <h2 class="fs-xxl fw-500 mt-4 text-white text-center">
                                    Registration
                                    <small class="h3 fw-300 mt-3 mb-5 text-white opacity-60 hidden-sm-down">
                                        It has long been found that when evaluating design and composition, readable text interferes with
                                        focus.
                                        <br>
                                        At its core, the fish text is an alternative to the traditional lorem ipsum

                                    </small>
                                </h2>
                            </div>
                            <div class="col-xl-6 ml-auto mr-auto">
                                <div class="card p-4 rounded-plus bg-faded">
                                    @if (session('status'))
                                        <div class="alert alert-success">
                                            {{ session('status') }}
                                        </div>
                                @endif

                                    <!-- Validation Errors -->
                                    <x-auth-validation-errors class="mb-4" class="alert alert-danger" :errors="$errors" />

                                    <form id="js-login" novalidate="" action="{{ route('register.handler') }}" method="POST">
                                        {{ csrf_field() }}
                                        <div class="form-group">
                                            <label class="form-label" for="name">Name</label>
                                            <input type="text" id="name" name="name" class="form-control"
                                                   placeholder="Name" required>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="emailverify">Email</label>
                                            <input type="email" id="emailverify" name="email" class="form-control"
                                                   placeholder="????. ??????????" required>
                                            <div class="invalid-feedback">Fill in the field.</div>
                                            <div class="help-block">Email the address will be your username during authorization</div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="password">Password <br></label>
                                            <input type="password" id="password" name="password" class="form-control" required autocomplete="new-password" />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" for="password_confirmation">Password Confirmation <br></label>
                                            <input type="password" id="password_confirmation" name="password_confirmation" class="form-control" required />
                                        </div>

                                        <div class="row no-gutters">
                                            <div class="col-md-4 ml-auto text-right">
                                                <button id="js-login-btn" type="submit"
                                                        class="btn btn-block btn-danger btn-lg mt-3">Registration
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="js/vendors.bundle.js"></script>
    <script>
        $("#js-login-btn").click(function (event) {

            // Fetch form to apply custom Bootstrap validation
            var form = $("#js-login")

            if (form[0].checkValidity() === false) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.addClass('was-validated');
            // Perform ajax submit here...
        });

    </script>
    </body>
@endsection
