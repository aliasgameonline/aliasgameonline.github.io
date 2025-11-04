// Дані слів за тематиками
const wordDatabase = {
    general: [
        'Комп\'ютер', 'Телефон', 'Книга', 'Стіл', 'Стілець', 'Двері', 'Вікно', 'Лампа', 
        'Машина', 'Велосипед', 'Літак', 'Поїзд', 'Корабель', 'Міст', 'Будинок', 'Квартира',
        'Гора', 'Ріка', 'Озеро', 'Море', 'Ліс', 'Поле', 'Квітка', 'Дерево',
        'Сонце', 'Місяць', 'Зірка', 'Дощ', 'Сніг', 'Вітер', 'Хмара', 'Райдуга'
    ],
    animals: [
        'Кіт', 'Собака', 'Вовк', 'Ведмідь', 'Лис', 'Заєць', 'Олень', 'Лось',
        'Лев', 'Тигр', 'Слон', 'Жираф', 'Мавпа', 'Зебра', 'Бик', 'Корова',
        'Конь', 'Козел', 'Вівця', 'Свиня', 'Курка', 'Півень', 'Качка', 'Гуска',
        'Орел', 'Сокіл', 'Сова', 'Ворона', 'Голуб', 'Ластівка', 'Риба', 'Акула'
    ],
    food: [
        'Хліб', 'Молоко', 'Сир', 'М\'ясо', 'Ковбаса', 'Яйце', 'Олія', 'Сіль',
        'Цукор', 'Мед', 'Масло', 'Йогурт', 'Морозиво', 'Торт', 'Печиво', 'Цукерка',
        'Яблуко', 'Груша', 'Банан', 'Апельсин', 'Лимон', 'Виноград', 'Полуниця', 'Малина',
        'Морква', 'Помідор', 'Огірок', 'Капуста', 'Цибуля', 'Часник', 'Картопля', 'Рис'
    ],
    sports: [
        'Футбол', 'Баскетбол', 'Волейбол', 'Теніс', 'Плавання', 'Біг', 'Стрибки', 'Мета',
        'Гімнастика', 'Бокс', 'Боротьба', 'Важка атлетика', 'Велоспорт', 'Гольф', 'Хокей', 'Ковзани',
        'Лижі', 'Сноуборд', 'Скейтборд', 'Серфінг', 'Альпінізм', 'Біг на довгі дистанції', 'Марафон', 'Стрибки у воду'
    ],
    movies: [
        'Фільм', 'Актор', 'Актриса', 'Режисер', 'Сценарист', 'Продюсер', 'Кінокамера', 'Монтаж',
        'Сюжет', 'Герой', 'Злодій', 'Комедія', 'Драма', 'Трилер', 'Жахи', 'Фантастика',
        'Вестерн', 'Бойовик', 'Мелодрама', 'Мультфільм', 'Документальний', 'Короткометражний', 'Серіал', 'Епізод'
    ],
    technology: [
        'Комп\'ютер', 'Ноутбук', 'Планшет', 'Смартфон', 'Телефон', 'Телевізор', 'Монітор', 'Клавіатура',
        'Миша', 'Принтер', 'Сканер', 'Камера', 'Фотоапарат', 'Навушники', 'Динамік', 'Мікрофон',
        'Інтернет', 'Сайт', 'Програма', 'Додаток', 'Ігри', 'Соціальні мережі', 'Електронна пошта', 'Повідомлення'
    ],
    nature: [
        'Гора', 'Ріка', 'Озеро', 'Море', 'Океан', 'Ліс', 'Поле', 'Луг',
        'Дерево', 'Квітка', 'Трава', 'Лист', 'Гілка', 'Стовбур', 'Корінь', 'Плод',
        'Птах', 'Тварина', 'Комаха', 'Бабочка', 'Бджола', 'Мураха', 'Жук', 'Павук',
        'Камінь', 'Пісок', 'Глина', 'Вода', 'Вогонь', 'Повітря', 'Земля', 'Небо'
    ],
    professions: [
        'Лікар', 'Медсестра', 'Вчитель', 'Вчителька', 'Інженер', 'Програміст', 'Дизайнер', 'Архітектор',
        'Будівельник', 'Слюсар', 'Електрик', 'Водій', 'Пілот', 'Капітан', 'Повар', 'Офіціант',
        'Продавець', 'Касир', 'Менеджер', 'Директор', 'Юрист', 'Суддя', 'Поліцейський', 'Пожежник',
        'Художник', 'Музикант', 'Актор', 'Журналіст', 'Фотограф', 'Відеограф', 'Фермер', 'Рибалка'
    ]
};

class AliasGame {
    constructor() {
        this.teams = [];
        this.currentTeamIndex = 0;
        this.currentRound = 1;
        this.selectedThemes = ['general'];
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

