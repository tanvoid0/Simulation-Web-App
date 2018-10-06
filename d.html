<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">

    <title>All Candidates</title>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css"/>
    {{--<script type="text/javascript" src="{{ asset('assets/home/DataTables/datatables.min.js') }}"></script>--}}
</head>
<body>
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="{{ route('home') }}">
            <img src="{{ 'img/logo-dark.png' }}" class="" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="{{ route('home') }}">Home <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="{{ route('login') }}">Login <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="{{ route('register') }}">Sign Up <span class="sr-only">(current)</span></a>
                </li>


            </ul>
            {{--<form class="form-inline my-2 my-lg-0">--}}
                {{--<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">--}}
                {{--<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>--}}
            {{--</form>--}}
        </div>
    </nav>
    <h2 class="text-center">Users</h2>
    <p class="text-center text-danger">All Data are dummy! So they may not match according to column</p>
    <div class="table-responsive table-bordered table-hover">
        <table id="example" class="display" style="width:100%">
            <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Skills</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Username</th>
                <th>Links</th>
            </tr>
            </thead>
            <tbody>

                @foreach($users as $user)
                    <tr>
                        <td>
                            <img src="{{ asset('img/user/'.$user->image) }}" alt="" class="img-thumbnail">
                        </td>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->designation }}</td>
                        <td>
{{--                            @php($skills = User::find($user->id)->skills)--}}
                            @php($skills = App\User::find($user->id)->skills)
{{--                            {{ implode(', ', $skills->name) }}--}}
                            @foreach($skills as $skill)
                                {{ $skill->name }}{{ $loop->last ? '' : ', ' }}
                            @endforeach
                        </td>
                        <td>{{ $user->phone }}</td>
                        <td>{{ $user->email }}</td>
                        <td>{{ $user->address }}</td>
                        <td>{{ $user->username }}</td>
                        <td>
                            <ul class="list-inline">
                                <li><a href="{{ $user->web }}" target="_blank" class="fa"><i class="fas fa-globe-americas"></i></a></li>
                                <li><a href="https://facebook.com/{{ $user->fb }}" target="_blank" class="fa"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="{{ route('cv.show', $user->username) }}" target="_blank" class="fa"><i class="fab fa-dochub"></i></a></li>
                                <li><a href="{{route('index', $user->username)}}" target="_blank" class="fa"><i class="fas fa-user"></i></a></li>
                            </ul>
                        </td>
                    </tr>
                @endforeach
            {{--<tr>--}}
                {{--<td data-search="Tiger Nixon">T. Nixon</td>--}}
                {{--<td>System Architect</td>--}}
                {{--<td>Edinburgh</td>--}}
                {{--<td>Edinburghsg</td>--}}
                {{--<td>61</td>--}}
                {{--<td data-order="1303689600">Mon 25th Apr 11</td>--}}
                {{--<td data-order="320800">$320,800/y</td>--}}
            {{--</tr>--}}

            </tbody>
            <tfoot>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Skills</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Username</th>
                <th>Links</th>
            </tr>
            </tfoot>
        </table>
        {{--<table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td class="gutter"><div class="line number1 index0 alt2">1</div><div class="line number2 index1 alt1">2</div><div class="line number3 index2 alt2">3</div></td><td class="code"><div class="container"><div class="line number1 index0 alt2"><code class="js plain">$(document).ready(</code><code class="js keyword">function</code><code class="js plain">() {</code></div><div class="line number2 index1 alt1"><code class="js spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="js plain">$(</code><code class="js string">'#example'</code><code class="js plain">).DataTable();</code></div><div class="line number3 index2 alt2"><code class="js plain">} );</code></div></div></td></tr></tbody></table>--}}
        {{--<table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td class="gutter"><div class="line number1 index0 alt2" style="display: none;">1</div></td><td class="code"><div class="container" style="display: none;"><div class="line number1 index0 alt2" style="display: none;">&nbsp;</div></div></td></tr></tbody></table>--}}
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>


{{--<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>--}}
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>

<script>
    $(document).ready(function () {
        $('#example').DataTable();
    });
</script>
</body>
</html>