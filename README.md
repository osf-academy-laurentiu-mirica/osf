<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- reset across browsers -->
    <link rel='stylesheet' href='/css/reset.css'>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
        integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <!-- dedicated -->
    </style>
    <link rel='stylesheet' href='/css/css.css'>
    </style>
    <title>OSF Academy</title>
</head>

<!-- .mobile & .pc used to target corresponding environments -->

<body>
    <div class="mainWrapper">
        <!-- banner -->
        <div id='banner'>banner</div>

        <!-- featured products -->
        <div id='featured_products' class='pc'>featured products</div>

        <!-- follow -->
        <div id='follow' class='pc'>follow</div>

        <!-- footer -->
        <div id='footer'>footer</div>

        <!-- fp_controls -->
        <div id='fp_controls' class='pc'>fp controls</div>

        <!-- fp_cards -->
        <div id='fp_cards' class='pc'>fp_cards</div>

        <!-- header -->
        <div id='header'>
            <!-- for mobile -->
            <div class="mobile">
                <img src="/img/mobile/logo.png" alt="OSF Logo" srcset="">
            </div>
            <!-- for pc -->
            <div class="pc">
                <div id="logo3">
                    <div>
                        <a href="/OSF Academy.html">
                            <img src="/img/pc/logo.jpg" alt="" srcset="">
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- load_more -->
        <div id='load_more' class='pc'>load more</div>

        <!-- locale -->
        <div id='locale'>locale</div>

        <!-- nav -->
        <div id='nav'>
            <!-- for pc -->
            <div class="pc my-auto mr-0 ml-auto">
                <div id="services d-flex flex-column mr-0">
                    SERVICES
                </div>
                <div id="company d-flex flex-column mr-0">
                    COMPANY
                </div>
                <div id="library d-flex flex-column mr-0">
                    LIBRARY
                </div>
                <div id="contact_us d-flex flex-column mr-0">
                    CONTACT US
                </div>
            </div>
            <!-- for mobile -->
            <div class="mobile">
                <div>
                    SERVICES
                </div>
                <div>
                    COMPANY
                </div>
                <div>
                    LIBRARY
                </div>
                <div>
                    CONTACT US
                </div>
            </div>
        </div>

        <!-- p_cards -->
        <div id='p_cards'>p_cards</div>

        <!-- personals -->
        <div id='personals'>personals</div>

        <!-- populars -->
        <div id='populars' class='pc'>populars</div>

        <!-- s_card1 -->
        <div id='s_card1'>s_card1</div>

        <!-- s_card2 -->
        <div id='s_card2'>s_card2</div>

        <!-- s_card3 -->
        <div id='s_card3'>s_card3</div>

        <!-- slider -->
        <div id='slider'>slider</div>
    </div>

    <!-- ### others ### -->
    <!-- ~ mobile only ~ -->
    <div class="mobile" id="mobileNavMenu" onclick="mobileNavMenu(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>

    <!-- login -->
    <form id="login" class='modal fade show py-3 mx-5 rounded'>
        <div class="form-group bg-white p-2 my-0">
            <input type="email" class="form-control-sm w-100" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email">
        </div>
        <div class="form-group bg-white p-2 my-0">
            <input type="password" class="form-control-sm w-100" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="d-flex bg-white px-1 pb-1" style='width: 100%; justify-content: space-between;'>
            <button id="cancelLogin" type='button' class="btn btn-secondary" data-toggle="modal"
                data-target="#login">Cancel</button>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>

    <!-- LogIn Button -->
    <button id="login_btn" type="button" class="btn-sm btn-primary mobile" data-toggle="modal" data-target="#login">Log
        in</button>
    <!-- cookies -->
    <div id="cookies" class='modal bg-white' style='display: blocks;'>
        <div id="close_cookies" class="opened_menu">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
        <div id="cookies_title">
            This website uses cookies
        </div>
        <div id='cookies_text'>OSF uses its own and third-party cookies for statistical purposes, to know your
            preferences, for website
            performance
            and interaction with social media offering publicity tailored to your interests. If you continue browsing,
            we consider that you accept its use.
            You can expand this information consulting our Cookies Policy Page.
        </div>
        <div id="cookies_button">ACCEPT</div>
    </div>


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"
        integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"
        integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous">
    </script>
    <script src='/js/js.js'></script>
</body>

</html>
