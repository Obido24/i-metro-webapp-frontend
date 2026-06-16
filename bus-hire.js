(function () {
  const form = document.getElementById('bus-hire-request-form');
  if (!form) return;

  const submitButton = document.getElementById('bus-hire-submit');
  const feedback = document.getElementById('bus-hire-feedback');

  const fields = {
    fullNameOrOrganization: document.getElementById('bus-hire-name'),
    phoneNumber: document.getElementById('bus-hire-phone'),
    whatsappNumber: document.getElementById('bus-hire-whatsapp'),
    emailAddress: document.getElementById('bus-hire-email'),
    pickupPoint: document.getElementById('bus-hire-pickup'),
    dropoffPoint: document.getElementById('bus-hire-dropoff'),
    destinationOrEventLocation: document.getElementById('bus-hire-destination'),
    dateOfService: document.getElementById('bus-hire-date'),
    timeOfService: document.getElementById('bus-hire-time'),
    numberOfTrips: document.getElementById('bus-hire-trips'),
    numberOfBusesNeeded: document.getElementById('bus-hire-buses'),
    typeOfEventOrPurpose: document.getElementById('bus-hire-purpose'),
    additionalNotesOrSpecialRequest: document.getElementById('bus-hire-notes'),
  };

  function getApiUrl() {
    const configuredBase =
      typeof window !== 'undefined' && window.I_METRO_API_BASE_URL
        ? String(window.I_METRO_API_BASE_URL).trim().replace(/\/$/, '')
        : '';
    const fallbackBase =
      window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:3000'
        : 'https://api.ridei-metro.com';
    return `${configuredBase || fallbackBase}/api/bus-hire/requests/public`;
  }

  function setFeedback(message, tone) {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.className = 'rounded-2xl border px-4 py-3 text-sm';
    feedback.classList.remove('hidden');

    if (tone === 'success') {
      feedback.classList.add('border-emerald-200', 'bg-emerald-50', 'text-emerald-900');
    } else if (tone === 'error') {
      feedback.classList.add('border-rose-200', 'bg-rose-50', 'text-rose-900');
    } else {
      feedback.classList.add('border-slate-200', 'bg-slate-50', 'text-slate-700');
    }
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const payload = {
      fullNameOrOrganization: fields.fullNameOrOrganization?.value.trim() || '',
      phoneNumber: fields.phoneNumber?.value.trim() || '',
      whatsappNumber: fields.whatsappNumber?.value.trim() || '',
      emailAddress: fields.emailAddress?.value.trim() || '',
      pickupPoint: fields.pickupPoint?.value.trim() || '',
      dropoffPoint: fields.dropoffPoint?.value.trim() || '',
      destinationOrEventLocation: fields.destinationOrEventLocation?.value.trim() || '',
      dateOfService: fields.dateOfService?.value || '',
      timeOfService: fields.timeOfService?.value || '',
      numberOfTrips: Number(fields.numberOfTrips?.value || 0),
      numberOfBusesNeeded: Number(fields.numberOfBusesNeeded?.value || 0),
      typeOfEventOrPurpose: fields.typeOfEventOrPurpose?.value.trim() || '',
      additionalNotesOrSpecialRequest:
        fields.additionalNotesOrSpecialRequest?.value.trim() || '',
    };

    const requiredValues = [
      payload.fullNameOrOrganization,
      payload.phoneNumber,
      payload.whatsappNumber,
      payload.pickupPoint,
      payload.dropoffPoint,
      payload.destinationOrEventLocation,
      payload.dateOfService,
      payload.timeOfService,
      payload.typeOfEventOrPurpose,
    ];

    if (requiredValues.some((value) => !value) || payload.numberOfTrips < 1 || payload.numberOfBusesNeeded < 1) {
      setFeedback('Please complete all required bus hire request details before submitting.', 'error');
      return;
    }

    const originalLabel = submitButton?.textContent?.trim() || 'Submit Bus Hire Request';
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
    }
    setFeedback('Sending your request to the I-Metro operations team...', 'info');

    try {
      const response = await fetch(getApiUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || data?.ok === false) {
        throw new Error(data?.reason || data?.message || `Request failed with status ${response.status}`);
      }

      form.reset();
      setFeedback(
        data.notice ||
          'Thank you for requesting I-Metro Bus Service. Our team will review your request and contact you shortly.',
        'success'
      );

    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      setFeedback(
        message === 'Failed to fetch'
          ? 'We could not reach the bus hire backend right now. Please try again in a moment.'
          : `We could not submit your bus hire request yet. ${message}`,
        'error'
      );
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalLabel;
      }
    }
  });
})();
