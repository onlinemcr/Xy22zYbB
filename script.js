document.addEventListener('DOMContentLoaded', function () {
    const progressSteps = document.querySelectorAll('.progress-step');
    const progressLines = document.querySelectorAll('.progress-line');
    const paragraphs = document.querySelectorAll('.step-paragraph');

    function updateProgress(currentStep) {
        // Reset all steps and lines
        progressSteps.forEach((step, index) => {
            step.classList.remove('completed', 'current');
        });

        progressLines.forEach(line => {
            line.classList.remove('fill');
        });

        // Activate steps and lines sequentially
        for (let i = 0; i <= currentStep; i++) {
            if (i < currentStep) {
                progressSteps[i].classList.add('completed');
                setTimeout(() => {
                    progressLines[i].classList.add('fill');
                }, i * 500); // Delay each line fill to create the sequential effect
            } else if (i === currentStep) {
                setTimeout(() => {
                    progressSteps[i].classList.add('current');
                }, i * 500);
            }
        }

        // Update the bold text for the current step
        updateStepTextBold(currentStep);

        // Show the corresponding paragraph
        updateParagraph(currentStep);
    }

    // Function to update the bold text for the current step
    function updateStepTextBold(stepIndex) {
        progressSteps.forEach((step, index) => {
            const stepText = step.querySelector('p');
            if (index === stepIndex) {
                stepText.style.fontWeight = 'bold'; // Set the current step text to bold
            } else {
                stepText.style.fontWeight = 'normal'; // Reset other steps' text to normal
            }
        });
    }

    function updateParagraph(stepNumber) {
        paragraphs.forEach(paragraph => paragraph.classList.remove('active'));
        const activeParagraph = document.getElementById(`paragraph-${stepNumber}`);
        if (activeParagraph) {
            activeParagraph.classList.add('active');
        }
    }

    // Function to set the current step
    function setStep(stepNumber) {
        if (stepNumber >= 0 && stepNumber < progressSteps.length) {
            updateProgress(stepNumber);
        }
    }

    // Set the step to 1 (index 1) as an example
    setStep(2);
});
