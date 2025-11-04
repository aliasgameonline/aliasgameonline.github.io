// Дані слів за тематиками
const wordDatabase = {
    movies: [
        "Втеча з Шоушенка",
        "Хрещений батько",
        "Хрещений батько 2",
        "Хрещений батько 3",
        "Темний лицар",
        "Повернення темного лицаря",
        "Початок",
        "Інтерстеллар",
        "Матриця",
        "Матриця: Перезавантаження",
        "Матриця: Революції",
        "Бійцівський клуб",
        "Форрест Ґамп",
        "Зелена миля",
        "Список Шиндлера",
        "Сім",
        "Гладіатор",
        "Титанік",
        "Врятувати рядового Раяна",
        "Щелепи",
        "Індіана Джонс: У пошуках втраченого ковчега",
        "Індіана Джонс і храм долі",
        "Індіана Джонс і останній хрестовий похід",
        "Зоряні війни: Нова надія",
        "Імперія завдає удару у відповідь",
        "Повернення джедая",
        "Пробудження сили",
        "Останні джедаї",
        "Скайвокер. Сходження",
        "Назад у майбутнє",
        "Назад у майбутнє 2",
        "Назад у майбутнє 3",
        "Термінатор",
        "Термінатор 2: Судний день",
        "Чужий",
        "Чужі",
        "Хижак",
        "Роккі",
        "Роккі 2",
        "Роккі 3",
        "Роккі 4",
        "Роккі Бальбоа",
        "Крід",
        "Крід 2",
        "Крід 3",
        "Мовчання ягнят",
        "Ганнібал",
        "Червоний дракон",
        "Великий Лебовскі",
        "Вовк з Волл-стріт",
        "Острів проклятих",
        "Відступники",
        "Таксист",
        "Божевільний Макс: Дорога люті",
        "Апокаліпсис сьогодні",
        "Звичайні підозрювані",
        "Паразити",
        "Старим тут не місце",
        "Людина-павук: Навколо всесвіту",
        "Людина-павук: Крізь всесвіт",
        "Месники",
        "Месники: Ера Альтрона",
        "Месники: Війна нескінченності",
        "Месники: Завершення",
        "Капітан Америка: Зимовий солдат",
        "Капітан Америка: Громадянська війна",
        "Залізна людина",
        "Залізна людина 2",
        "Залізна людина 3",
        "Чорна пантера",
        "Чорна пантера: Ваканда назавжди",
        "Тор",
        "Тор: Раґнарок",
        "Вартові Галактики",
        "Вартові Галактики 2",
        "Вартові Галактики 3",
        "Доктор Стрендж",
        "Доктор Стрендж у мультивсесвіті божевілля",
        "Джокер",
        "Бетмен (2022)",
        "Бетмен: Початок",
        "Дюнкерк",
        "Оппенгеймер",
        "Гаррі Поттер і філософський камінь",
        "Гаррі Поттер і таємна кімната",
        "Гаррі Поттер і в'язень Азкабану",
        "Гаррі Поттер і келих вогню",
        "Гаррі Поттер і Орден Фенікса",
        "Гаррі Поттер і Напівкровний Принц",
        "Гаррі Поттер і Смертельні реліквії: Частина 1",
        "Гаррі Поттер і Смертельні реліквії: Частина 2",
        "Фантастичні звірі і де їх шукати",
        "Фантастичні звірі: Злочини Ґрін-де-Вальда",
        "Фантастичні звірі: Таємниці Дамблдора",
        "Гобіт: Несподівана подорож",
        "Гобіт: Пустка Смога",
        "Гобіт: Битва п'яти воїнств",
        "Хоробре серце",
        "Добрий, поганий, злий",
        "Один вдома",
        "Один вдома 2: Загублений у Нью-Йорку",
        "Шосте відчуття",
        "Вічне сяйво чистого розуму",
        "Американська історія Ікс",
        "Амелі",
        "Леон-кілер",
        "Піаніст",
        "Життя прекрасне",
        "Ізгой",
        "Нафта",
        "Гран Торино",
        "Три білборди за межами Еббінґа, Міссурі",
        "Король говорить!",
        "Форма води",
        "Історія іграшок",
        "Історія іграшок 3",
        "У пошуках Немо",
        "У пошуках Дорі",
        "Вгору",
        "Душа",
        "Коко",
        "Рататуй",
        "ВОЛЛ·І",
        "Суперсімейка",
        "Холодне серце",
        "Холодне серце 2",
        "Відважна",
        "Зоотрополіс",
        "Король Лев",
        "Аладдін",
        "Красуня і Чудовисько",
        "Мулан",
        "Шрек",
        "Шрек 2",
        "Кунг-фу Панда",
        "Кунг-фу Панда 2",
        "Як приручити дракона",
        "Як приручити дракона 2",
        "Принцеса Мононоке",
        "Мандрівний замок Хаула",
        "Віднесені привидами",
        "Могила світлячків",
        "Твоє ім'я",
        "Гра престолів",
        "Пуститися берега",
        "Краще телефонуйте Солу",
        "Друзі",
        "Теорія великого вибуху",
        "Офіс (США)",
        "Шерлок",
        "Доктор Хаус",
        "Справжній детектив",
        "Корона",
        "Дивні дива",
        "Чорне дзеркало",
        "Мандалорець",
        "Андор",
        "Останній з нас",
        "Ведмідь",
        "Гра в кальмара",
        "Паперовий будинок",
        "Нарко",
        "Фарґо",
        "Втеча з в'язниці",
        "Загублені",
        "Декстер",
        "Клан Сопрано",
        "Твін Пікс",
        "Відьмак",
        "Доктор Хто",
        "Зоряний шлях: Дискавері",
        "Зоряний шлях: Наступне покоління",
        "Кобра Кай",
        "Тед Лассо",
        "Емілі в Парижі",
        "Бріджертони",
        "Підпільна імперія",
        "Сини анархії",
        "Вікінги",
        "Вікінги: Вальгалла",
        "Пірати Карибського моря: Прокляття Чорної Перлини",
        "Пірати Карибського моря: Скриня мерця",
        "Пірати Карибського моря: На краю світу",
        "Пірати Карибського моря: На дивних берегах",
        "Пірати Карибського моря: Помста Салазара",
        "Аватар",
        "Аватар: Шлях води",
        "Джон Вік",
        "Джон Вік 2",
        "Джон Вік 3",
        "Джон Вік 4",
        "Місія нездійсненна",
        "Місія нездійсненна 2",
        "Місія нездійсненна 3",
        "Місія нездійсненна: Протокол Фантом",
        "Місія нездійсненна: Нація ізгоїв",
        "Місія нездійсненна: Фолаут",
        "Місія нездійсненна: Розплата. Частина перша",
        "Джанґо вільний",
        "Безславні виродки",
        "Вбити Білла",
        "Вбити Білла 2",
        "Бульвар Сансет",
        "Міст через річку Квай",
        "12 розгніваних чоловіків",
        "Психо",
        "Запаморочення",
        "Птахи",
        "2001: Космічна одіссея",
        "Механічний апельсин",
        "Сяйво",
        "Віднесені вітром",
        "Співаючи під дощем",
        "Римські канікули",
        "Амадей",
        "Апокаліпто",
        "Меланхолія",
        "Драйв",
        "Скайфолл",
        "Казино Рояль",
        "Не час помирати",
        "Ґолдфінґер",
        "Із Росії з любов'ю",
        "Живеш тільки двічі",
        "Лоґан",
        "Люди Ікс: Дні минулого майбутнього",
        "Дедпул",
        "Дедпул 2",
        "Темний фенікс",
        "Пташиний короб",
        "Тіні забутих предків",
        "Захар Беркут",
        "Кіборги",
        "Наші котики",
        "Поводир",
        "Мої думки тихі",
        "Атлантида",
        "Додому",
        "Земля блакитна, ніби апельсин",
        "Черкаси",
        "Памфір",
        "Віддана",
        "Люксембург, Люксембург",
        "Іловайськ 2014. Батальйон Донбас",
        "Крути 1918",
        "Заборонений",
        "Снайпер. Білий ворон",
        "Слуга народу",
        "Пес",
        "І будуть люди",
        "Спіймати Кайдаша",
        "Кава з кардамоном",
        "Село на мільйон",
        "Століття Якова",
        "Кріпосна",
        "Школа (2018)",
        "Гвардія",
        "Козаки. Футбол",
        "Козаки. Навколо світу",
        "Дракула (BBC)",
        "Чорнобиль",
        "Венздей",
        "Хід королеви",
        "Американська красуня",
        "Міст шпигунів",
        "Соціальна мережа",
        "1+1",
        "Ґранд Будапешт Готель",
        "Три ідіоти",
        "Життя Пі",
        "Загін самогубців",
        "Диво-Жінка",
        "Капітан Марвел",
        "Ла-Ла Ленд",
        "Місячне сяйво",
        "Ребекка",
        "Богемна рапсодія",
        "Людина, яка змінила все",
        "Король Лір (BBC)",
        "Піратська радіостанція",
        "На голці",
        "Дванадцять років рабства",
        "Хлопчик у смугастій піжамі",
        "Петля часу",
        "Козирні тузи",
        "Ефект метелика",
        "Соулмен",
        "Молодість",
        "Готель Руанда",
        "Земля кочівників",
        "Міст до Террабітії",
        "Відступники",
        "Початок знову",
        "Крамер проти Крамера",
        "Список контактів",
        "Одержимість",
        "Поляна сновидінь",
        "Чарівник країни Оз",
        "Зелена книга",
        "Мовчання",
        "Опівнічний експрес",
        "Дюн",
        "Видалений запис",
        "Секрети Лос-Анджелеса",
        "Ель Каміно: Фільм По дорозі",
        "Полонянка",
        "Ірландець",
        "Гра Імітації",
        "Виживший",
        "Ревенант",
        "Манчестер біля моря",
        "Бабадук",
        "Воно",
        "Жах Амітивілля",
        "Сяйво доктора Сліпа",
        "Кольори рук",
        "Ножі наголо",
        "Скляний замок",
        "Пікселі",
        "Прибуття",
        "Едвард Руки-ножиці",
        "Великий Ґетсбі",
        "Список смерті",
        "Бійня номер 5",
        "Гравітація",
        "Марсіанин",
        "Веном",
        "Веном 2",
        "Морбіус",
        "Шалений Макс 2",
        "Синя планета (BBC)",
        "Планета Земля (BBC)",
        "Наш планета",
        "Блакитна планета 2",
        "Космос: Простір і час",
        "Космічна Одисея 2010"
    ]
};

class AliasGame {
    constructor() {
        this.teams = [];
        this.currentTeamIndex = 0;
        this.currentRound = 1;
        this.selectedThemes = [];
        this.roundTime = 60;
        this.timer = null;
        this.timeLeft = 60;
        this.currentWords = [];
        this.currentWordIndex = 0;
        this.scores = {};
        this.gameStarted = false;
        this.currentPlayer = null;
        this.totalRounds = 3;
        this.currentPlayerIndex = {}; // Індекс поточного учасника для кожної команди
        this.isLastWord = false; // Чи зараз пояснюється останнє слово без таймера
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.addDefaultTeam();
    }

    setupEventListeners() {
        // Кнопки налаштування
        document.getElementById('addTeamBtn').addEventListener('click', () => this.addTeam());
        document.getElementById('startGameBtn').addEventListener('click', () => this.startGame());
        
        // Кнопки гри
        document.getElementById('correctBtn').addEventListener('click', () => this.handleCorrect());
        document.getElementById('wrongBtn').addEventListener('click', () => this.handleWrong());
        
        // Кнопка початку раунду
        document.getElementById('startRoundBtn').addEventListener('click', () => this.startRoundGameplay());
        
        // Кнопки результатів
        document.getElementById('newRoundBtn').addEventListener('click', () => this.startNewRound());
        document.getElementById('newGameBtn').addEventListener('click', () => this.resetGame());
        
        // Вибір тематик
        document.querySelectorAll('.theme-option input').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    if (!this.selectedThemes.includes(e.target.value)) {
                        this.selectedThemes.push(e.target.value);
                    }
                } else {
                    this.selectedThemes = this.selectedThemes.filter(t => t !== e.target.value);
                }
            });
        });
    }

    addDefaultTeam() {
        this.addTeam();
    }

    addTeam() {
        const teamId = Date.now();
        const team = {
            id: teamId,
            name: `Команда ${this.teams.length + 1}`,
            members: [],
            score: 0
        };
        
        this.teams.push(team);
        this.scores[teamId] = 0;
        this.renderTeams();
    }

    removeTeam(teamId) {
        if (this.teams.length <= 1) {
            alert('Повинна бути принаймні одна команда!');
            return;
        }
        
        this.teams = this.teams.filter(t => t.id !== teamId);
        delete this.scores[teamId];
        this.renderTeams();
    }

    addMemberToTeam(teamId, memberName) {
        if (!memberName.trim()) return;
        
        const team = this.teams.find(t => t.id === teamId);
        if (team && !team.members.includes(memberName.trim())) {
            team.members.push(memberName.trim());
            this.renderTeams();
        }
    }

    removeMemberFromTeam(teamId, memberName) {
        const team = this.teams.find(t => t.id === teamId);
        if (team) {
            team.members = team.members.filter(m => m !== memberName);
            this.renderTeams();
        }
    }

    updateTeamName(teamId, newName) {
        const team = this.teams.find(t => t.id === teamId);
        if (team) {
            team.name = newName;
        }
    }

    renderTeams() {
        const container = document.getElementById('teamsContainer');
        container.innerHTML = '';

        this.teams.forEach(team => {
            const teamDiv = document.createElement('div');
            teamDiv.className = 'team';
            teamDiv.innerHTML = `
                <div class="team-header">
                    <input type="text" class="team-name-input" value="${team.name}" 
                           data-team-id="${team.id}">
                    ${this.teams.length > 1 ? `<button class="btn btn-remove" data-team-id="${team.id}">Видалити</button>` : ''}
                </div>
                <div class="team-members" id="members-${team.id}">
                    ${team.members.map(member => `
                        <div class="member-tag">
                            <span>${member}</span>
                            <button data-team-id="${team.id}" data-member-name="${member.replace(/"/g, '&quot;')}">×</button>
                        </div>
                    `).join('')}
                </div>
                <div class="member-input-group">
                    <input type="text" class="member-input" id="member-input-${team.id}" 
                           placeholder="Додати учасника..." 
                           data-team-id="${team.id}">
                    <button class="btn btn-secondary" data-team-id="${team.id}">Додати</button>
                </div>
            `;
            container.appendChild(teamDiv);
        });

        // Додаємо обробники подій після рендерингу
        this.teams.forEach(team => {
            // Обробник для зміни назви команди
            const teamNameInput = container.querySelector(`input[data-team-id="${team.id}"].team-name-input`);
            if (teamNameInput) {
                teamNameInput.addEventListener('change', (e) => {
                    this.updateTeamName(team.id, e.target.value);
                });
            }

            // Обробник для кнопки видалення команди
            const removeTeamBtn = container.querySelector(`button.btn-remove[data-team-id="${team.id}"]`);
            if (removeTeamBtn) {
                removeTeamBtn.addEventListener('click', () => {
                    this.removeTeam(team.id);
                });
            }

            // Обробник для видалення учасника
            const removeMemberBtns = container.querySelectorAll(`button[data-team-id="${team.id}"][data-member-name]`);
            removeMemberBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const memberName = btn.getAttribute('data-member-name');
                    this.removeMemberFromTeam(team.id, memberName);
                });
            });

            // Обробник для інпуту нового учасника
            const memberInput = document.getElementById(`member-input-${team.id}`);
            if (memberInput) {
                memberInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        const memberName = memberInput.value.trim();
                        if (memberName) {
                            this.addMemberToTeam(team.id, memberName);
                            memberInput.value = '';
                        }
                    }
                });
            }

            // Обробник для кнопки додавання учасника
            const addMemberBtn = container.querySelector(`button.btn-secondary[data-team-id="${team.id}"]`);
            if (addMemberBtn) {
                addMemberBtn.addEventListener('click', () => {
                    const memberInput = document.getElementById(`member-input-${team.id}`);
                    if (memberInput) {
                        const memberName = memberInput.value.trim();
                        if (memberName) {
                            this.addMemberToTeam(team.id, memberName);
                            memberInput.value = '';
                        }
                    }
                });
            }
        });
    }

    startGame() {
        // Валідація
        if (this.selectedThemes.length === 0) {
            alert('Виберіть принаймні одну тематику!');
            return;
        }

        if (this.teams.length === 0) {
            alert('Додайте принаймні одну команду!');
            return;
        }

        if (this.teams.some(t => t.members.length === 0)) {
            alert('Кожна команда повинна мати принаймні одного учасника!');
            return;
        }

        this.roundTime = parseInt(document.getElementById('roundTime').value) || 60;
        this.totalRounds = parseInt(document.getElementById('totalRounds').value) || 3;
        this.gameStarted = true;
        this.currentTeamIndex = 0;
        this.currentRound = 1;
        
        // Ініціалізуємо індекси учасників для кожної команди
        this.currentPlayerIndex = {};
        this.teams.forEach(team => {
            this.currentPlayerIndex[team.id] = 0;
            this.scores[team.id] = 0;
            team.score = 0;
        });

        this.showRoundStartScreen();
    }

    showRoundStartScreen() {
        const currentTeam = this.teams[this.currentTeamIndex];
        
        // Визначаємо поточного учасника за індексом
        if (currentTeam.members.length > 0) {
            const playerIndex = this.currentPlayerIndex[currentTeam.id] || 0;
            this.currentPlayer = currentTeam.members[playerIndex];
        } else {
            this.currentPlayer = 'Учасник';
        }
        
        // Показуємо інформацію про раунд
        document.getElementById('roundStartTeamName').textContent = currentTeam.name;
        document.getElementById('roundStartPlayerName').textContent = this.currentPlayer;
        document.getElementById('roundStartRoundNumber').textContent = this.currentRound;
        
        // Показуємо поточний рахунок
        const scoresDisplay = document.getElementById('roundStartScoresDisplay');
        scoresDisplay.innerHTML = this.teams.map(team => {
            const isCurrentTeam = team.id === currentTeam.id;
            return `
                <div class="round-start-score-item ${isCurrentTeam ? 'active' : ''}">
                    <div class="round-start-score-team-name">${team.name}</div>
                    <div class="round-start-score-value">${this.scores[team.id] || 0}</div>
                </div>
            `;
        }).join('');
        
        this.showScreen('roundStartScreen');
    }

    startRoundGameplay() {
        this.showScreen('gameScreen');
        this.startRound();
    }

    startRound() {
        this.currentWordIndex = 0;
        this.isLastWord = false;
        this.generateWords();
        this.showCurrentWord();
        this.updateScores();
        this.updateRoundInfo();
        this.startTimer();
    }

    generateWords() {
        const allWords = [];
        this.selectedThemes.forEach(theme => {
            if (wordDatabase[theme]) {
                allWords.push(...wordDatabase[theme]);
            }
        });

        // Перемішуємо слова
        this.currentWords = this.shuffleArray([...allWords]);
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    showCurrentWord() {
        const currentTeam = this.teams[this.currentTeamIndex];
        document.getElementById('currentTeamDisplay').textContent = currentTeam.name;
        document.getElementById('currentTeamName').textContent = `Зараз: ${currentTeam.name}`;
        document.getElementById('currentPlayerDisplay').textContent = this.currentPlayer || 'Учасник';
        
        // Перевіряємо чи є слова і чи не вийшли за межі масиву
        if (!this.currentWords || this.currentWords.length === 0) {
            this.generateWords();
        }
        
        if (this.currentWordIndex < this.currentWords.length) {
            document.getElementById('currentWord').textContent = this.currentWords[this.currentWordIndex];
        } else {
            // Закінчилися слова, генеруємо нові
            this.generateWords();
            this.currentWordIndex = 0;
            if (this.currentWords.length > 0) {
                document.getElementById('currentWord').textContent = this.currentWords[this.currentWordIndex];
            }
        }
    }

    updateRoundInfo() {
        document.getElementById('roundNumber').textContent = this.currentRound;
    }

    startTimer() {
        this.timeLeft = this.roundTime;
        this.isLastWord = false;
        this.updateTimerDisplay();

        if (this.timer) {
            clearInterval(this.timer);
        }

        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();

            if (this.timeLeft <= 0) {
                this.onTimeUp();
            }
        }, 1000);
    }

    onTimeUp() {
        clearInterval(this.timer);
        this.isLastWord = true;
        this.updateTimerDisplay();
    }

    updateTimerDisplay() {
        const timerElement = document.getElementById('timer');
        
        if (this.isLastWord) {
            timerElement.textContent = 'Останнє слово';
            timerElement.classList.remove('warning', 'danger');
            timerElement.classList.add('last-word');
        } else {
            timerElement.textContent = this.timeLeft;
            timerElement.classList.remove('warning', 'danger', 'last-word');
            if (this.timeLeft <= 10) {
                timerElement.classList.add('danger');
            } else if (this.timeLeft <= 20) {
                timerElement.classList.add('warning');
            }
        }
    }

    handleCorrect() {
        const currentTeam = this.teams[this.currentTeamIndex];
        this.scores[currentTeam.id]++;
        currentTeam.score++;
        
        if (this.isLastWord) {
            // Якщо це останнє слово, завершуємо раунд
            this.endRound();
        } else {
            // Інакше переходимо до наступного слова
            this.nextWord();
        }
        this.updateScores();
    }

    handleWrong() {
        const currentTeam = this.teams[this.currentTeamIndex];
        if (this.scores[currentTeam.id] > 0) {
            this.scores[currentTeam.id]--;
            currentTeam.score--;
        }
        
        if (this.isLastWord) {
            // Якщо це останнє слово, завершуємо раунд
            this.endRound();
        } else {
            // Інакше переходимо до наступного слова
            this.nextWord();
        }
        this.updateScores();
    }

    nextWord() {
        this.currentWordIndex++;
        this.showCurrentWord();
    }

    updateScores() {
        const scoresDisplay = document.getElementById('scoresDisplay');
        scoresDisplay.innerHTML = this.teams.map(team => {
            const isCurrentTeam = team.id === this.teams[this.currentTeamIndex].id;
            return `
                <div class="score-item ${isCurrentTeam ? 'active' : ''}">
                    <div class="score-team-name">${team.name}</div>
                    <div class="score-value">${this.scores[team.id] || 0}</div>
                </div>
            `;
        }).join('');
    }

    endRound() {
        // Зупиняємо таймер якщо він ще працює
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        const currentTeam = this.teams[this.currentTeamIndex];
        const teamId = currentTeam.id;
        
        // Переходимо до наступного учасника в поточній команді
        this.currentPlayerIndex[teamId] = (this.currentPlayerIndex[teamId] || 0) + 1;
        
        // Перевіряємо чи всі учасники поточної команди вже пояснили
        if (this.currentPlayerIndex[teamId] >= currentTeam.members.length) {
            // Всі учасники команди пояснили, переходимо до наступної команди
            this.currentPlayerIndex[teamId] = 0; // Скидаємо для наступного раунду
            this.currentTeamIndex++;
            
            if (this.currentTeamIndex < this.teams.length) {
                // Є ще команди в цьому раунді
                setTimeout(() => {
                    this.showRoundStartScreen();
                }, 1000);
            } else {
                // Всі команди пройшли всіх своїх учасників - раунд закінчився
                this.currentRound++;
                this.currentTeamIndex = 0;
                
                // Скидаємо індекси учасників для нового раунду
                this.teams.forEach(team => {
                    this.currentPlayerIndex[team.id] = 0;
                });
                
                // Перевіряємо чи закінчилася вся гра
                if (this.currentRound > this.totalRounds) {
                    this.showResults();
                } else {
                    setTimeout(() => {
                        this.showRoundStartScreen();
                    }, 2000);
                }
            }
        } else {
            // Є ще учасники в поточній команді
            setTimeout(() => {
                this.showRoundStartScreen();
            }, 1000);
        }
    }

    startNewRound() {
        this.currentTeamIndex = 0;
        this.currentRound = 1;
        
        // Скидаємо індекси учасників та рахунки
        this.teams.forEach(team => {
            this.currentPlayerIndex[team.id] = 0;
            this.scores[team.id] = 0;
            team.score = 0;
        });
        
        this.showRoundStartScreen();
    }

    showResults() {
        this.showScreen('resultsScreen');
        
        const finalScores = document.getElementById('finalScores');
        const sortedTeams = [...this.teams].sort((a, b) => (this.scores[b.id] || 0) - (this.scores[a.id] || 0));
        
        finalScores.innerHTML = sortedTeams.map((team, index) => `
            <div class="final-score-item ${index === 0 ? 'winner' : ''}">
                <div>
                    ${index === 0 ? '🏆 ' : ''}${team.name}
                    ${team.members.length > 0 ? `(${team.members.join(', ')})` : ''}
                </div>
                <div>${this.scores[team.id] || 0} балів</div>
            </div>
        `).join('');
    }

    resetGame() {
        this.gameStarted = false;
        this.currentTeamIndex = 0;
        this.currentRound = 1;
        this.timeLeft = this.roundTime;
        
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        // Скидаємо індекси учасників та рахунки
        this.currentPlayerIndex = {};
        this.teams.forEach(team => {
            this.currentPlayerIndex[team.id] = 0;
            team.score = 0;
            this.scores[team.id] = 0;
        });
        
        this.showScreen('setupScreen');
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
}

// Ініціалізація гри
let game;
window.addEventListener('DOMContentLoaded', () => {
    game = new AliasGame();
});

