@extends('layouts.layout')

@section('title')
    <title>Edit</title>
@endsection

@section('style')
    <link id="vendorsbundle" rel="stylesheet" media="screen, print" href="/css/vendors.bundle.css">
    <link id="appbundle" rel="stylesheet" media="screen, print" href="/css/app.bundle.css">
    <link id="myskin" rel="stylesheet" media="screen, print" href="/css/skins/skin-master.css">
    <link rel="stylesheet" media="screen, print" href="/css/fa-solid.css">
    <link rel="stylesheet" media="screen, print" href="/css/fa-brands.css">
@endsection

@section('body-content')
    <body>
    <main id="js-page-content" role="main" class="page-content mt-3">
        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-plus-circle'></i> Edit
            </h1>

        </div>
        <form action="/user_edit/{{$user->id}}" method="POST">
            {{@csrf_field()}}
            <div class="row">
                <div class="col-xl-6">
                    <div id="panel-1" class="panel">
                        <div class="panel-container">
                            <div class="panel-hdr">
                                <h2>General information</h2>
                            </div>
                            <div class="panel-content">
                                <!-- username -->
                                <div class="form-group">
                                    <label class="form-label" for="simpleinput">Name</label>
                                    <input type="text" id="simpleinput" name="name" class="form-control" value="{{$user->name}}">
                                </div>

                                <!-- title -->
                                <div class="form-group">
                                    <label class="form-label" for="simpleinput">Place of work</label>
                                    <input type="text" id="simpleinput" name="work" class="form-control" value="{{$user->work}}">
                                </div>

                                <!-- tel -->
                                <div class="form-group">
                                    <label class="form-label" for="simpleinput">Phone number</label>
                                    <input type="text" id="simpleinput" name="phone" class="form-control" value="{{$user->phone}}">
                                </div>

                                <!-- address -->
                                <div class="form-group">
                                    <label class="form-label" for="simpleinput">The address</label>
                                    <input type="text" id="simpleinput" name="address" class="form-control" value="{{$user->address}}">
                                </div>
                                <div class="col-md-12 mt-3 d-flex flex-row-reverse">
                                    <button class="btn btn-warning">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </main>

    <script src="js/vendors.bundle.js"></script>
    <script src="js/app.bundle.js"></script>
    <script>

        $(document).ready(function()
        {

            $('input[type=radio][name=contactview]').change(function()
            {
                if (this.value == 'grid')
                {
                    $('#js-contacts .card').removeClassPrefix('mb-').addClass('mb-g');
                    $('#js-contacts .col-xl-12').removeClassPrefix('col-xl-').addClass('col-xl-4');
                    $('#js-contacts .js-expand-btn').addClass('d-none');
                    $('#js-contacts .card-body + .card-body').addClass('show');

                }
                else if (this.value == 'table')
                {
                    $('#js-contacts .card').removeClassPrefix('mb-').addClass('mb-1');
                    $('#js-contacts .col-xl-4').removeClassPrefix('col-xl-').addClass('col-xl-12');
                    $('#js-contacts .js-expand-btn').removeClass('d-none');
                    $('#js-contacts .card-body + .card-body').removeClass('show');
                }

            });

            //initialize filter
            initApp.listFilter($('#js-contacts'), $('#js-filter-contacts'));
        });

    </script>
    </body>
@endsection
