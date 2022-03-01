<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clément's Web Site</title>
    <link rel="stylesheet" href="assets/styles/css/style.css">
</head>
<body>

    <div class="container">

        <!-- To-do list -->
        <section class="container-to-do">
            <form>
                <input type="text" id="item" placeholder="Entrer une tâche">
                <button type="submit">
                    <img src="assets/img/to-do/add.svg" alt="add to the list">
                </button>
            </form>
        
            <ul class="list"></ul>
        </section>

        <!-- weather report -->
        <section class="container-weather">
            <div class="block-weather">

                <div class="overlay-loading">
                    <img src="assets/img/loading/loading.gif" alt="loading icon">
                </div>
        
                <div class="block-pimary">
                    <div class="block-icon">
                        <img src="" alt="weather report icon" class="weather-icon">
                    </div>
        
                    <div class="block-data">
                        <p class="weather"></p>
                        <p class="temperature"></p>
                        <p class="city"></p>
                    </div>
                </div>
               
                <div class="block-hour">

                    <?php for($i = 0; $i < 7; $i++) { ?>
                        <div class="block-h">
                            <p class="hour"></p>
                            <p class="hour-temp"></p>
                        </div>
                    <?php } ?>
                    
                </div>

                <div class="block-day">

                    <?php for($j = 0; $j < 7; $j++) { ?>
                        <div class="block-d">
                            <p class="day"></p>
                            <p class="day-temp"></p>
                        </div>
                    <?php } ?>

                </div>
        
            </div>
        </section>

        <!-- Pomodoro -->
        <section class="container-pomodoro">
            <div class="pomodoro">
                <div class="window-timer">
                    <div class="block">
                        <p>Travailler</p>
                        <p class="time-work"></p>
                    </div>
                    <div class="block">
                        <p>Pause</p>
                        <p class="time-break"></p>
                    </div>
                </div>
            
                <div class="window-btn">
                    <button class="btn b1">Start</button>
                    <button class="btn b2">Stop</button>
                    <button class="btn b3">Reset</button>
                </div>
            </div>
        </section>

        <!-- date -->
        <section class="date">
            <h2 class="dates"></h2>
        </section>

    </div>

<script src="assets/js/to-do-list.js"></script>
<script src="assets/js/date.js"></script>
<script src="assets/js/pomodoro.js"></script>
<script type="module" src="assets/js/weather.js"></script>
</body>
</html>