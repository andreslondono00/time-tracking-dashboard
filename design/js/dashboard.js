onDailyClick();

function onDailyClick() {
    fetch('/data.json').then((response) => {
        if (!response.ok) return console.log('Oops! Something went wrong.');

        return response.json();
    }).then((data) => {
        processDailyData(data);
    });
}

function onWeeklyClick() {
    fetch('/data.json').then((response) => {
        if (!response.ok) return console.log('Oops! Something went wrong.');

        return response.json();
    }).then((data) => {
        processWeeklyData(data);
    });
}

function onMonthlyClick() {
    fetch('/data.json').then((response) => {
        if (!response.ok) return console.log('Oops! Something went wrong.');

        return response.json();
    }).then((data) => {
        processMonthlyData(data);
    });
}

function processDailyData(data) {
    document.getElementById("daily_menu").classList.add("active");
    document.getElementById("weekly_menu").classList.remove("active");
    document.getElementById("monthly_menu").classList.remove("active");

    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        switch (element.title) {
            case "Work":
                document.getElementById("work_hours").innerHTML = element.timeframes.daily.current + "hrs";
                document.getElementById("last_week_work").innerHTML = "Last Day " + element.timeframes.daily.previous + "hrs";
                break;
            case "Play":
                document.getElementById("play_hours").innerHTML = element.timeframes.daily.current + "hrs";
                document.getElementById("last_week_play").innerHTML = "Last Day " + element.timeframes.daily.previous + "hrs";
                break;
            case "Study":
                document.getElementById("study_hours").innerHTML = element.timeframes.daily.current + "hrs";
                document.getElementById("last_week_study").innerHTML = "Last Day " + element.timeframes.daily.previous + "hrs";
                break;
            case "Exercise":
                document.getElementById("exercise_hours").innerHTML = element.timeframes.daily.current + "hrs";
                document.getElementById("last_week_exercise").innerHTML = "Last Day " + element.timeframes.daily.previous + "hrs";
                break;
            case "Social":
                document.getElementById("social_hours").innerHTML = element.timeframes.daily.current + "hrs";
                document.getElementById("last_week_social").innerHTML = "Last Day " + element.timeframes.daily.previous + "hrs";
                break;
            case "Self Care":
                document.getElementById("self_care_hours").innerHTML = element.timeframes.daily.current + "hrs";
                document.getElementById("last_week_self_care").innerHTML = "Last Day " + element.timeframes.daily.previous + "hrs";
                break;

            default:
                break;
        }
    }
}

function processWeeklyData(data) {
    document.getElementById("weekly_menu").classList.add("active");
    document.getElementById("daily_menu").classList.remove("active");
    document.getElementById("monthly_menu").classList.remove("active");

    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        switch (element.title) {
            case "Work":
                document.getElementById("work_hours").innerHTML = element.timeframes.weekly.current + "hrs";
                document.getElementById("last_week_work").innerHTML = "Last Week " + element.timeframes.weekly.previous + "hrs";
                break;
            case "Play":
                document.getElementById("play_hours").innerHTML = element.timeframes.weekly.current + "hrs";
                document.getElementById("last_week_play").innerHTML = "Last Week " + element.timeframes.weekly.previous + "hrs";
                break;
            case "Study":
                document.getElementById("study_hours").innerHTML = element.timeframes.weekly.current + "hrs";
                document.getElementById("last_week_study").innerHTML = "Last Week " + element.timeframes.weekly.previous + "hrs";
                break;
            case "Exercise":
                document.getElementById("exercise_hours").innerHTML = element.timeframes.weekly.current + "hrs";
                document.getElementById("last_week_exercise").innerHTML = "Last Week " + element.timeframes.weekly.previous + "hrs";
                break;
            case "Social":
                document.getElementById("social_hours").innerHTML = element.timeframes.weekly.current + "hrs";
                document.getElementById("last_week_social").innerHTML = "Last Week " + element.timeframes.weekly.previous + "hrs";
                break;
            case "Self Care":
                document.getElementById("self_care_hours").innerHTML = element.timeframes.weekly.current + "hrs";
                document.getElementById("last_week_self_care").innerHTML = "Last Week " + element.timeframes.weekly.previous + "hrs";
                break;

            default:
                break;
        }
    }
}

function processMonthlyData(data) {
    document.getElementById("monthly_menu").classList.add("active");
    document.getElementById("daily_menu").classList.remove("active");
    document.getElementById("weekly_menu").classList.remove("active");

    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        switch (element.title) {
            case "Work":
                document.getElementById("work_hours").innerHTML = element.timeframes.monthly.current + "hrs";
                document.getElementById("last_week_work").innerHTML = "Last Month " + element.timeframes.monthly.previous + "hrs";
                break;
            case "Play":
                document.getElementById("play_hours").innerHTML = element.timeframes.monthly.current + "hrs";
                document.getElementById("last_week_play").innerHTML = "Last Month " + element.timeframes.monthly.previous + "hrs";
                break;
            case "Study":
                document.getElementById("study_hours").innerHTML = element.timeframes.monthly.current + "hrs";
                document.getElementById("last_week_study").innerHTML = "Last Month " + element.timeframes.monthly.previous + "hrs";
                break;
            case "Exercise":
                document.getElementById("exercise_hours").innerHTML = element.timeframes.monthly.current + "hrs";
                document.getElementById("last_week_exercise").innerHTML = "Last Month " + element.timeframes.monthly.previous + "hrs";
                break;
            case "Social":
                document.getElementById("social_hours").innerHTML = element.timeframes.monthly.current + "hrs";
                document.getElementById("last_week_social").innerHTML = "Last Month " + element.timeframes.monthly.previous + "hrs";
                break;
            case "Self Care":
                document.getElementById("self_care_hours").innerHTML = element.timeframes.monthly.current + "hrs";
                document.getElementById("last_week_self_care").innerHTML = "Last Month " + element.timeframes.monthly.previous + "hrs";
                break;

            default:
                break;
        }
    }
}