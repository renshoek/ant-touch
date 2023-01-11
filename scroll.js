    function scrollDown() {
      // Get the current scroll position
      var currentScrollPosition = window.pageYOffset;

      // Calculate the new scroll position
      var newScrollPosition = currentScrollPosition + window.innerHeight;

      // Scroll to the new position
      window.scrollTo(0, newScrollPosition);
    }

