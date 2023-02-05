export function TelegramBot(text: string) {

    const tokenBot = '5926747023:AAGEfrQ38-n_aS44qSXp1ehwwa9a4YK2dio'
    const urlAPITelegram = `https://api.telegram.org/bot${tokenBot}`

    const adminsArray: any = {
        'Алексей': '1082615760',
    }

    fetch(`${urlAPITelegram}/sendMessage?chat_id=${adminsArray['Алексей']}&text=${text}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json',
        }
    })
        .then(() => {
            alert('Сообщение отправлено')
        })

}