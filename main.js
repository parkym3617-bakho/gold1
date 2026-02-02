const recipes = [
    {
        id: "kimchi-jjigae",
        name: "김치찌개",
        icon: "🍲",
        description: "한국인의 소울푸드, 칼칼하고 맛있는 김치찌개!"
    },
    {
        id: "doenjang-jjigae",
        name: "된장찌개",
        icon: "🥘",
        description: "구수하고 든든한 맛, 언제 먹어도 맛있는 된장찌개!"
    },
    {
        id: "jeyuk-bokkeum",
        name: "제육볶음",
        icon: "🍖",
        description: "매콤달콤한 맛에 밥 한 그릇 뚝딱! 제육볶음!"
    },
    {
        id: "gyeran-jjim",
        name: "계란찜",
        icon: "🥚",
        description: "부드럽고 촉촉한 식감, 아이들도 좋아하는 계란찜!"
    },
    {
        id: "tteokbokki",
        name: "떡볶이",
        icon: "🌶️",
        description: "국민간식, 매콤달콤 쫄깃한 떡볶이!"
    },
    {
        id: "gamja-jeon",
        name: "감자전",
        icon: "🥔",
        description: "바삭하고 쫀득한 식감, 막걸리를 부르는 감자전!"
    },
    {
        id: "bibimbap",
        name: "비빔밥",
        icon: "🍚",
        description: "다양한 재료와 함께 즐기는 건강하고 맛있는 비빔밥!"
    },
    {
        id: "jjapaguri",
        name: "짜파구리",
        icon: "🍜",
        description: "영화 기생충으로 더욱 유명해진, 짜파게티와 너구리의 환상 조합!"
    },
    {
        id: "kimchi-bokkeumbap",
        name: "김치볶음밥",
        icon: "🍛",
        description: "남은 김치와 밥으로 만드는 간단하지만 맛있는 김치볶음밥!"
    },
    {
        id: "budae-jjigae",
        name: "부대찌개",
        icon: "🌭",
        description: "다양한 햄과 소시지가 듬뿍, 얼큰하고 푸짐한 부대찌개!"
    }
];

const recipeList = document.getElementById('recipe-list');

recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';

    const recipeIcon = document.createElement('div');
    recipeIcon.className = 'recipe-icon';
    recipeIcon.textContent = recipe.icon;

    const recipeName = document.createElement('h3');
    recipeName.textContent = recipe.name;

    const recipeDescription = document.createElement('p');
    recipeDescription.textContent = recipe.description;

    recipeCard.appendChild(recipeIcon);
    recipeCard.appendChild(recipeName);
    recipeCard.appendChild(recipeDescription);

    // Add click event listener for navigation
    if (recipe.id) {
        recipeCard.style.cursor = 'pointer';
        recipeCard.addEventListener('click', () => {
            window.location.href = `${recipe.id}.html`;
        });
    }

    recipeList.appendChild(recipeCard);
});
