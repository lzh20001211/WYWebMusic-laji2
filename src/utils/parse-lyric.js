const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

// /**
// [00:00.000] 作曲 : 许嵩
// [00:01.000] 作词 : 许嵩
// [00:22.240]天空好想下雨

export function parseLyric(lyricString) {
    const lineStrings = lyricString.split("\n");

    const lyrics = [];
    for (let line of lineStrings) {
        if (line) {
            const result = parseExp.exec(line);//匹配正则表达式
            if(!result) continue;//跳过空字符串
            const time1 = result[1] * 60 * 1000;
            const time2 = result[2] * 1000;
            const time3 = result[3].length === 3 ? result[3]*1:result[3]*10;
            const time = time1 + time2 + time3//将时间转为毫秒
            //console.log(time);
            const content = line.replace(parseExp,"").trim()//将时间部分替换为空字符串 trim 去除字符串左右两边的空格
            const lineObj = {time,content};
            lyrics.push(lineObj);
        }
    }
    return lyrics;
}
