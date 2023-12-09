// Массив с координатами для фарминга
const farmSpots = [
  new Vector(-1500, 1500, 0), 
  new Vector(-2000, -2000, 0)
];

// Функция для отправки юнита фармить в случайную точку
function sendUnitToFarm(unit) {

  // Выбираем случайную фарм точку
  const spot = farmSpots[Math.floor(Math.random() * farmSpots.length)]; 
  
  // Отправляем приказ юниту идти в эту точку
  unit.Order({
    OrderType: dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_POSITION,
    Position: spot
  });
}

// Обработчик события нажатия клавиши "F"
GameEvents.Subscribe("keyevent", (key) => {

  // Проверяем, если "F"
  if (key === EKeyCode.F) {

    // Получаем выделенных юнитов
    const units = Players.GetLocal().GetSelectedUnits();

    // Отправляем каждого фармить 
    for (const unit of units) {
      sendUnitToFarm(unit); 
    }
  }
});
