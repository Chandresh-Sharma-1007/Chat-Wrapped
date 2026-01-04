  // USERS DATA
        const users = {shreya: 'tandav'};
        let current = 0

        function unlock() {
            const name = document.getElementById('nameInput').value.toLowerCase().trim();
            const pass = document.getElementById('nickInput').value.toLowerCase().trim();

            if (users[name] === pass) {
                document.getElementById('login').classList.add('hidden');
                document.getElementById('loading').classList.remove('hidden');

                if (navigator.vibrate) navigator.vibrate(200);
                confetti();

                setTimeout(() => {
                    document.getElementById('loading').classList.add('hidden');
                    document.getElementById('slides').classList.remove('hidden');
                }, 2000);
            } else {
                alert("Incorrect Name or Nickname!");
            }
        }

        function confetti() {
            for (let i = 0; i < 30; i++) {
                let c = document.createElement('div');
                c.className = 'confetti';
                c.style.left = Math.random() * 100 + 'vw';
                c.style.top = '-10px';
                document.body.appendChild(c);
                setTimeout(() => c.remove(), 3000);
            }
        }

        function shareWrapped() {
            if (navigator.share) {
                navigator.share({
                    title: 'My Chat Wrapped',
                    text: 'Check out my Chat Wrapped 🔥',
                    url: location.href
                });
            } else {
                alert("Sharing is not supported on this browser.");
            }
        }

        // Background Particles
        for (let i = 0; i < 40; i++) {
            let d = document.createElement('div');
            d.className = 'dot';
            d.style.left = Math.random() * 100 + 'vw';
            d.style.animationDelay = Math.random() * 6 + 's';
            document.body.appendChild(d);
        }