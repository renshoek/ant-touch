          var counter = 1;

            function openIframe() {
                // Generate a unique name for the new iframe by incrementing the counter
                var iframeName = 'iframe_' + counter;
                counter++;

                // Generate random coordinates for the new iframe
                var x = Math.random() * (screen.width - 170);
                var y = Math.random() * (screen.height - 0);

                // Offset the coordinates by the scroll position
                x += window.scrollX;
                y += window.scrollY;

                // Create a new iframe element and set its name and style
                var iframe = document.createElement('iframe');
                iframe.name = iframeName;
                iframe.src = 'ant.html';
                iframe.width = 170;
                iframe.height = 250;
                iframe.style.zIndex = 99;
                iframe.style.position = 'absolute';
                iframe.style.top = y + 'px';
                iframe.style.left = x + 'px';

                // Append the new iframe to the document
                document.body.appendChild(iframe);
            }