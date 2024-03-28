const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const captureButton = document.getElementById('captureButton');
    const gallery = document.getElementById('gallery');
    const ctx = canvas.getContext('2d');
    const mapDiv = document.getElementById('map');

    async function setupCamera() {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    }

    captureButton.addEventListener('click', async () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageURL = canvas.toDataURL('image/jpeg');
        const image = new Image();
        image.src = imageURL;
        gallery.appendChild(image);

        try {
            const position = await getCurrentPosition();
            displayMap(position.coords.latitude, position.coords.longitude);
        } catch (error) {
            console.error('Error getting location:', error);
        }
    });

    function getCurrentPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    function displayMap(latitude, longitude) {
        mapDiv.style.display = 'block';
        const mapOptions = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: 15,
        };
        const map = new google.maps.Map(mapDiv, mapOptions);

        const marker = new google.maps.Marker({
            position: mapOptions.center,
            map: map,
        });
    }

    setupCamera()
        .then(() => {
            console.log('Camera setup successful');
        })
        .catch((error) => {
            console.error('Error setting up camera:', error);
        });