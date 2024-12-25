new MutationObserver(() => {
    document.querySelectorAll('ytd-thumbnail yt-image, .ytp-videowall-still-image, .ytd-rich-grid-media yt-image')
        .forEach(e => {
            if (e.classList.contains('chillguyified')) return;

            let img = document.createElement('IMG');
            img.src = chrome.runtime.getURL('chillguy.png');
            img.style.position = 'absolute';

            const thumbWidth = e.offsetWidth;
            const thumbHeight = e.offsetHeight;
            const imgWidth = Math.min(thumbWidth * (0.6 + Math.random() * 0.2), 180);
            const imgHeight = Math.min(imgWidth * 0.75, 135);

            const maxVerticalOffset = thumbHeight * 0.2;
            const centerY = thumbHeight / 2;
            const minY = centerY - maxVerticalOffset;
            const maxY = centerY + maxVerticalOffset;

            const maxX = thumbWidth - imgWidth + (thumbWidth * 0.2);
            const randomX = Math.floor(Math.random() * maxX);

            const randomY = Math.floor(Math.random() * (maxY - minY) + minY);

            img.style.left = `${randomX}px`;
            img.style.top = `${randomY}px`;
            img.style.width = `${imgWidth}px`;
            img.style.height = `${imgHeight}px`;
            img.style.zIndex = '10';
            img.style.objectFit = 'cover';

            const randomRotation = (Math.random() * 20 - 10);
            img.style.transform = `rotate(${randomRotation}deg)`;

            if (Math.random() > 0.5) {
                img.style.transform += ' scaleX(-1)';
            }

            e.append(img);
            e.classList.add('chillguyified');
        });
}).observe(document.querySelector('ytd-page-manager'), {subtree: true, childList: true});

new MutationObserver(() => {
    document.querySelectorAll('ytd-thumbnail yt-image, .ytp-videowall-still-image, .ytd-rich-grid-media yt-image')
        .forEach(e => {
            if (!e.classList.contains('chillguyified')) {
                let img = document.createElement('IMG');
                img.src = chrome.runtime.getURL('chillguy.png');
                img.style.position = 'absolute';

                const thumbWidth = e.offsetWidth;
                const thumbHeight = e.offsetHeight;
                const imgWidth = Math.min(thumbWidth * (0.6 + Math.random() * 0.2), 180);
                const imgHeight = Math.min(imgWidth * 0.75, 135);

                const maxVerticalOffset = thumbHeight * 0.2;
                const centerY = thumbHeight / 2;
                const minY = centerY - maxVerticalOffset;
                const maxY = centerY + maxVerticalOffset;

                const maxX = thumbWidth - imgWidth + (thumbWidth * 0.2);
                const randomX = Math.floor(Math.random() * maxX);
                const randomY = Math.floor(Math.random() * (maxY - minY) + minY);

                img.style.left = `${randomX}px`;
                img.style.top = `${randomY}px`;
                img.style.width = `${imgWidth}px`;
                img.style.height = `${imgHeight}px`;
                img.style.zIndex = '10';
                img.style.objectFit = 'cover';

                const randomRotation = (Math.random() * 20 - 10);
                img.style.transform = `rotate(${randomRotation}deg)`;

                if (Math.random() > 0.5) {
                    img.style.transform += ' scaleX(-1)';
                }

                e.append(img);
                e.classList.add('chillguyified');
            }
        });
}).observe(document.querySelector('ytd-app'), {subtree: true, childList: true});

