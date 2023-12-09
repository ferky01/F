// Регистрируем корневую папку меню
Menu.RegisterRootFolder("Farm Script");

// Папка в меню
const settings = Menu.AddFolder("Farm Script", "Settings"); 

// Массив точек для фарма
const farmSpots = [
  new Vector(-1500, 1500),
  new Vector(-2000, -2000) 
];

// Добавляем тогл в настройки   
const enabled = settings.AddToggle("Enabled", false);

// Инициализация скрипта
function OnScriptLoad() {

  // Вешаем обработчик на переключение тоглла
  enabled.OnChange(() => {   
    // перезаписываем переменную 
    enabled.value = !enabled.value;
  });

}


// Обработка нажатия клавиши F
GameEvents.Subscribe("keyevent", (key) => {

  // Если скрипт выключен - выходим
  if (!enabled.value) 
    return; 
    
  // Если нажата F  
  if (key === EKeyCode.F) {

    // Отправляем всех выделенных юнитов
    Players.GetLocal().GetSelectedUnits().ForEach(unit => {
     SendUnitToFarm(unit) 
    });

  }
   
});

// Отправка юнита фармить 
function SendUnitToFarm(unit) {

  // Выбираем случайную точку
  const spot = farmSpots[Math.RandomInt(0, farmSpots.length)];

  // Приказ юниту двигаться в эту точку  
  unit.Order({  
    OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_POSITION,
    Position: spot
  });

}


// Регистрируем скрипт
RegisterScript({
  OnScriptLoad    
}, "Farm Script");
