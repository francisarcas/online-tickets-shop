// Show a calendar to pick a date
        function showCalendar() {
            const dateInput = document.getElementById('date-input');
            dateInput.type = 'date';
        }

        // Autofill Running or Cycling based on input in Type
        document.getElementById('type-input').addEventListener('input', function (e) {
            const input = e.target.value.toLowerCase();
            if (input.startsWith('r')) {
                e.target.value = 'Running';
            } else if (input.startsWith('c')) {
                e.target.value = 'Cycling';
            }
        });


        // Auto-suggest functionality for "Select Type"
        document.getElementById('selectType').addEventListener('input', function(e) {
            const input = e.target.value.toLowerCase();
            if (input.startsWith('c')) {
                e.target.value = 'Cycling';
            } else if (input.startsWith('r')) {
                e.target.value = 'Running';
            }
        });