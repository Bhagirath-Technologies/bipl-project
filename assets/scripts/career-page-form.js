document.addEventListener('DOMContentLoaded', () => {

    const url = 'https://script.google.com/macros/s/AKfycbznGj8Q1y_MEPLbZJF3n8WVwTSWqtF3JWltnYKIompGlZVCy1V3eYD1wklZ2JDHX4LS/exec';

    const jobApplicationForm = document.getElementById('jobApplicationForm');

    jobApplicationForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(jobApplicationForm);
        formData.append("sheetname", "career query");
        const urlEncodedData = new URLSearchParams(formData).toString();

        try {
            document.querySelector("#submitButtonJobApplicationForm").value = "Submitting...";
            document.querySelector("#submitButtonJobApplicationForm").disabled = true;

            const response = await fetch(
                url,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: urlEncodedData,
                });

            const result = await response.text();
            if (result.error) {
                throw new Error(result.error);
            }

            alert(result);
            jobApplicationForm.reset();
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Error: ' + error.message);
        }
        finally {
            document.querySelector("#submitButtonJobApplicationForm").value = "Submit";
            document.querySelector("#submitButtonJobApplicationForm").disabled = false;
        }
    })

});
