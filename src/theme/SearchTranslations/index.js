import { translate } from '@docusaurus/Translate';
const translations = {
    button: {
        buttonText: translate({
            id: 'theme.SearchBar.label',
            message: 'Поиск',
            description: 'The ARIA label and placeholder for search button',
        }),
        buttonAriaLabel: translate({
            id: 'theme.SearchBar.label',
            message: 'Поиск',
            description: 'The ARIA label and placeholder for search button',
        }),
    },
    modal: {
        searchBox: {
            resetButtonTitle: translate({
                id: 'theme.SearchModal.searchBox.resetButtonTitle',
                message: 'Очистить запрос',
                description: 'The label and ARIA label for search box reset button',
            }),
            resetButtonAriaLabel: translate({
                id: 'theme.SearchModal.searchBox.resetButtonTitle',
                message: 'Очистить запрос',
                description: 'The label and ARIA label for search box reset button',
            }),
            cancelButtonText: translate({
                id: 'theme.SearchModal.searchBox.cancelButtonText',
                message: 'Отмена',
                description: 'The label and ARIA label for search box cancel button',
            }),
            cancelButtonAriaLabel: translate({
                id: 'theme.SearchModal.searchBox.cancelButtonText',
                message: 'Отмена',
                description: 'The label and ARIA label for search box cancel button',
            }),
        },
        startScreen: {
            recentSearchesTitle: translate({
                id: 'theme.SearchModal.startScreen.recentSearchesTitle',
                message: 'Недавние',
                description: 'The title for recent searches',
            }),
            noRecentSearchesText: translate({
                id: 'theme.SearchModal.startScreen.noRecentSearchesText',
                message: 'История поиска пуста',
                description: 'The text when no recent searches',
            }),
            saveRecentSearchButtonTitle: translate({
                id: 'theme.SearchModal.startScreen.saveRecentSearchButtonTitle',
                message: 'Сохранить этот запрос',
                description: 'The label for save recent search button',
            }),
            removeRecentSearchButtonTitle: translate({
                id: 'theme.SearchModal.startScreen.removeRecentSearchButtonTitle',
                message: 'Удалить этот запрос из истории',
                description: 'The label for remove recent search button',
            }),
            favoriteSearchesTitle: translate({
                id: 'theme.SearchModal.startScreen.favoriteSearchesTitle',
                message: 'В избранное',
                description: 'The title for favorite searches',
            }),
            removeFavoriteSearchButtonTitle: translate({
                id: 'theme.SearchModal.startScreen.removeFavoriteSearchButtonTitle',
                message: 'Удалить запрос из избранного',
                description: 'The label for remove favorite search button',
            }),
        },
        errorScreen: {
            titleText: translate({
                id: 'theme.SearchModal.errorScreen.titleText',
                message: 'Не удаётся получить результаты',
                description: 'The title for error screen of search modal',
            }),
            helpText: translate({
                id: 'theme.SearchModal.errorScreen.helpText',
                message: 'Возможно, вам стоит проверить своё сетевое подключение',
                description: 'The help text for error screen of search modal',
            }),
        },
        footer: {
            selectText: translate({
                id: 'theme.SearchModal.footer.selectText',
                message: 'для выбора',
                description: 'The explanatory text of the action for the enter key',
            }),
            selectKeyAriaLabel: translate({
                id: 'theme.SearchModal.footer.selectKeyAriaLabel',
                message: 'Клавиша Enter',
                description: 'The ARIA label for the Enter key button that makes the selection',
            }),
            navigateText: translate({
                id: 'theme.SearchModal.footer.navigateText',
                message: 'для перемещения',
                description: 'The explanatory text of the action for the Arrow up and Arrow down key',
            }),
            navigateUpKeyAriaLabel: translate({
                id: 'theme.SearchModal.footer.navigateUpKeyAriaLabel',
                message: 'Стрелка вверх',
                description: 'The ARIA label for the Arrow up key button that makes the navigation',
            }),
            navigateDownKeyAriaLabel: translate({
                id: 'theme.SearchModal.footer.navigateDownKeyAriaLabel',
                message: 'Стрелка вниз',
                description: 'The ARIA label for the Arrow down key button that makes the navigation',
            }),
            closeText: translate({
                id: 'theme.SearchModal.footer.closeText',
                message: 'чтобы закрыть',
                description: 'The explanatory text of the action for Escape key',
            }),
            closeKeyAriaLabel: translate({
                id: 'theme.SearchModal.footer.closeKeyAriaLabel',
                message: 'Клавиша Escape',
                description: 'The ARIA label for the Escape key button that close the modal',
            }),
            searchByText: translate({
                id: 'theme.SearchModal.footer.searchByText',
                message: 'Поиск от',
                description: 'The text explain that the search is making by Algolia',
            }),
        },
        noResultsScreen: {
            noResultsText: translate({
                id: 'theme.SearchModal.noResultsScreen.noResultsText',
                message: 'Ничего не найдено по запросу',
                description: 'The text explains that there are no results for the following search',
            }),
            suggestedQueryText: translate({
                id: 'theme.SearchModal.noResultsScreen.suggestedQueryText',
                message: 'Попробуйте поискать',
                description: 'The text for the suggested query when no results are found for the following search',
            }),
            reportMissingResultsText: translate({
                id: 'theme.SearchModal.noResultsScreen.reportMissingResultsText',
                message: 'Считаете, что этот запрос должен иметь результаты?',
                description: 'The text for the question where the user thinks there are missing results',
            }),
            reportMissingResultsLinkText: translate({
                id: 'theme.SearchModal.noResultsScreen.reportMissingResultsLinkText',
                message: 'Сообщите нам.',
                description: 'The text for the link to report missing results',
            }),
        },
    },
    placeholder: translate({
        id: 'theme.SearchModal.placeholder',
        message: 'Поиск по вики',
        description: 'The placeholder of the input of the DocSearch pop-up modal',
    }),
};
export default translations;
