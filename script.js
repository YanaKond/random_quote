new Vue({
    el: '#app',
    data: {
        quotes: [
            { text: "Жизнь — это то, что с нами происходит, пока мы строим планы.", author: "Джон Леннон" },
            { text: "Секрет успеха в том, чтобы начать.", author: "Марк Твен" },
            { text: "Счастье не зависит от того, что с нами происходит, а от того, как мы на это реагируем.", author: "Чарльз Р. Свиндолл" },
            { text: "Самое большое богатство — это быть довольным тем, что у тебя есть.", author: "Эпиктет" },
            { text: "Чтобы что-то изменить, нужно сначала измениться самому.", author: "Махатма Ганди" }
        ],
        currentQuote: {}
    },
    methods: {
        getRandomQuote() {
            const RandomIndex = Math.floor(Math.random() * this.quotes.length);
            this.currentQuote = this.quotes[RandomIndex]; 
        }
    },
    created() {
        this.getRandomQuote();
    }
});
