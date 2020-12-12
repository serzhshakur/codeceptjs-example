Feature('Search in Duckduckgo');

const response = [{"phrase": "test"}, {"phrase": "hello"}, {"phrase": "world"}, {"phrase": "duckduckgo"}];

Scenario('search a word with mocked response', ({I}) => {
    I.amOnPage('https://duckduckgo.com/');
    I.mockRequest('GET', 'https://duckduckgo.com/ac/?q*', response);
    I.fillField('#search_form_input_homepage', 'hello');
    I.seeElement('.search__autocomplete');
    I.seeNumberOfElements('.search__autocomplete .acp', response.length);
    response.forEach(({phrase}) => I.see(phrase, '.search__autocomplete .acp'))
});
