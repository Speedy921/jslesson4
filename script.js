



const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting (startTime, durationMinutes){
    //Извлекается час и минуты начала встречи из строки startTime с помощью регулярного выражения. 
    //Регулярное выражение  соответствует строке, которая начинается с одной или двух цифр, 
    //за которыми следует двоеточие и ещё две цифры.
    var[ , meetingStartHour, meetingStartMinutes ] = startTime.match(/^(\d{1,2}):(\d{2})$/) || [];

    //Преобразуется аргумент durationMinutes в число.
    durationMinutes = Number(durationMinutes);

    //Проверяется, являются ли час и минуты начала встречи строками. Если нет, то функция возвращает false.
    if(
        typeof meetingStartHour  == "string" &&
        typeof meetingStartMinutes == "string"
    ){
        let durationHours = Math.floor(durationMinutes / 60);
            durationMinutes = durationMinutes - (durationHours * 60);
        //Вычисляется час окончания встречи.
        let meetingEndHour = Number(meetingStartHour) + durationHours;
        //Вычисляются минуты окончания встречи.
        let meetingEndMinutes = Number(meetingStartMinutes) + durationMinutes;

        //Проверяется, попадает ли время окончания встречи в рабочие часы. Если нет, то функция возвращает false.
        if(meetingEndMinutes >= 60){
            meetingEndHour = meetingEndHour + 1;
            meetingEndMinutes = meetingEndMinutes - 60;
        }

        //Форматируется время начала встречи с ведущими нулями, если необходимо.
        let meetingStart = `${meetingStartHour.padStart(2, "0")}:${meetingStartMinutes.padStart(2,"0")}`;
        //Форматируется время окончания встречи с ведущими нулями, если необходимо.
        let meetingEnd = `${String(meetingEndHour).padStart(2,"0")}:${String(meetingEndMinutes).padStart(2,"0")}`;

        //Возвращается true, если время окончания встречи попадает в рабочие часы, иначе возвращается false.
        return (
            meetingStart >= dayStart && meetingEnd <= dayEnd
        );

    }

    return false;
}

const res1 = scheduleMeeting("7:00",15);
const res2 = scheduleMeeting("07:15",30);
const res3 = scheduleMeeting("7:30", 30);
const res4 = scheduleMeeting("11:30",45);
const res5 = scheduleMeeting("17:00", 45);
const res6 = scheduleMeeting("17:30", 30);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);
