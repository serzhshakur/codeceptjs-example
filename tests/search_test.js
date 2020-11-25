Feature('Search');

const response = [{"phrase": "test"}, {"phrase": "hello"}, {"phrase": "world"}, {"phrase": "duckduckgo"}];

Scenario('search in Duckduckgo', ({I}) => {
    I.amOnPage('https://duckduckgo.com/');
    I.mockRequest('GET', 'https://duckduckgo.com/ac/*', response);
    I.fillField('#search_form_input_homepage', 'hello');
});
