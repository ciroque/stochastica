export const withResponseClass = (response) => ({ responseClass: parseInt(response.status / 100), response: response });

export const assertSuccess = ({responseClass, response}) => {
  switch(responseClass) {
    case 2: return response;
    default: {
      console.error(`ERROR: HTTP Status: ${response.status}`);
      throw {status: response.status, message: response.statusText, response: response};
    }
  }
};

export const getJson = (response) => response.json();

export const translateError = (error) => {
  switch(error.status) {
    case 401: {
      return "The supplied credentials are not valid. Please try again.";
    }
    case 404: {
      return "The requested resource was not found.";
    }
    case 422: {
      const errors = error.body.errors;
      const message = Object.keys(errors).map(key => {
        return `${key}\n${errors[key].map(msg => ` - ${msg}\n`)}`;
      });
      return `There was an error with the input:\n${message}`
    }
    default: {
      return "It is unclear what happened...";
    }
  }
};

export const processRawResponse = (response) => {
  const responseClass = parseInt("" + (response.status / 100));
  switch(responseClass) {
    case 2: return response.json().then((json) => ({body: json, response: response}));
    default: {
      return response.json().then((json) => {
        console.error(`ERROR: HTTP Status: ${response.statusText}, HTTP Message: ${response.statusText}, Body: ${JSON.stringify(json)}`);
        throw {status: response.status, message: response.statusText, body: json};
      });
    }
  }
};

