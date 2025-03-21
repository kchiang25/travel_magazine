// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Lightbox initialization for image galleries (if applicable)
    const lightbox = new bootstrap.Lightbox(document.querySelectorAll('.trip-link'));

    // Smooth scrolling for anchor links (optional)
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Check if today is the user's birthday (e.g., March 21)
    const today = new Date();
    const birthdayMonth = 3; // March (0-based, so 3 represents March)
    const birthdayDay = 22;  // The 21st day

    // Check if today is the birthday
    //if (today.getMonth() === birthdayMonth && today.getDate() === birthdayDay) {
    // Display a browser alert pop-up
    alert("Happy Birthday! Wishing you a wonderful year ahead!");
//}


    // Custom Modal for trip details (optional)
    const tripLinks = document.querySelectorAll('.trip-link');
    tripLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const tripName = this.textContent;
            showModal(tripName);
        });
    });

    // Function to show a simple modal with trip details
    function showModal(tripName) {
        const modalHtml = `
            <div class="modal fade" id="tripModal" tabindex="-1" aria-labelledby="tripModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="tripModalLabel">Trip Details: ${tripName}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Here, you'll find all the exciting details about your upcoming trip to <strong>${tripName}</strong>!</p>
                            <p>We can't wait to share our adventures with you!</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Insert the modal HTML into the page
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById('tripModal'));
        modal.show();

        // Clean up the modal after it's closed
        document.getElementById('tripModal').addEventListener('hidden.bs.modal', function () {
            this.remove();
        });
    }
});
