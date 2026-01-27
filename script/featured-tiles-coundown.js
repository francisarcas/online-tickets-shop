
        // Function to start countdown for each event
        function startCountdown(eventId, eventDate) {
            var countdownElement = document.getElementById(eventId);
            var eventTime = new Date(eventDate).getTime();

            var countdownTimer = setInterval(function() {
                var now = new Date().getTime();
                var distance = eventTime - now;

                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

                if (distance < 0) {
                    clearInterval(countdownTimer);
                    countdownElement.innerHTML = "Event Started";
                }
            }, 1000);
        }


        // Start countdown for each event with its specific date
        startCountdown('countdown1', 'Dec 5, 2025 09:00:00');
        startCountdown('countdown2', 'Nov 20, 2025 08:00:00'); // Change to your desired date
        startCountdown('countdown3', 'Jan 10, 2025 10:00:00');
        startCountdown('countdown4', 'Mar 15, 2025 07:00:00');
        startCountdown('countdown5', 'Feb 25, 2025 06:00:00');

