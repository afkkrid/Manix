// Проверка, что Telegram Web App API доступен
if (window.Telegram && Telegram.WebApp) {
    console.log("Telegram Web App API доступен.");
    Telegram.WebApp.ready();
    Telegram.WebApp.expand(); // Развернуть приложение на весь экран
} else {
    console.error("Telegram Web App API недоступен. Запустите приложение в Telegram.");
}

// Функция для выбора подписки
function selectSubscription(type) {
    console.log("Кнопка нажата, тип подписки:", type); // Логирование

    const subscriptions = {
        basic: { 
            type: 'basic', 
            price: 10, 
            description: "Базовая подписка: доступ к основным функциям." 
        },
        pro: { 
            type: 'pro', 
            price: 20, 
            description: "Про подписка: расширенные функции и приоритетная поддержка." 
        },
        vip: { 
            type: 'vip', 
            price: 50, 
            description: "VIP подписка: полный доступ, эксклюзивные функции и личный менеджер." 
        }
    };

    const selected = subscriptions[type];
    console.log("Данные для отправки:", selected); // Логирование

    if (Telegram.WebApp.sendData) {
        console.log("Отправка данных боту...");
        Telegram.WebApp.sendData(JSON.stringify(selected));
        Telegram.WebApp.close(); // Закрыть мини-приложение после отправки данных
    } else {
        console.error("Функция отправки данных недоступна.");
        alert("Функция отправки данных недоступна. Запустите приложение в Telegram.");
    }
}