var yosh = prompt('yoshingizni kiriting')
if (!isNaN(yosh)) {
    if (yosh < 18) {
        console.log('siz oqishingiz kerak!')
    }else if (yosh <= 18) {
        console.log('oz ustizda ishlashni boshlang')
    } else if (yosh >= 18 && yosh <= 25) {
        console.log('ishlashni ayni vaqti')
    } else if (yosh >= 25 && yosh <= 45) {
        console.log("siz ishdasiz! chalg'imang")
    } else if (yosh >= 45 && yosh <= 60) {
        console.log('siz nafaqaga chiqishingiz kerak!')
    } else if (yosh >= 60 && yosh < 100) {
        console.log('siz nafaqadasiz!')
    } else {
        console.log('xato qaytadan urinb koring :(')
    }
}