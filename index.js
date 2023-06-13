const fs = require('fs');
const sharp = require('sharp');
const path = require('path');
const folderPath = './input'; // Replace with the path to your folder

const jsonFile = require('./file_names.json')
// console.log(jsonFile)
async function textOverlayWatermark(data) {
  try {
    const { input, output, format, date } = data;
    const image = sharp(`./input/${input}`);
    const metadata = await image.metadata();
    const { width, height } = metadata;
    // const dateTime = formatDate(date, format);
    const text = "MC1262-Sultanganj" + "Khagaria-Bihar-South" + "4/1/2023";
    const watermark = {
      create: {
        width,
        height,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
      raw: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <text x="${date.length * 110}" y="${height * 0.99}" fill="#000" font-size="${(Math.max(width, height) / 100) * 5}" font-family="sans-serif">
          (${format})
        </text>
      </svg>`),
    };
    await image.composite([{ input: watermark.raw, blend: 'over' }]).toFile(`./output/${output}`);
    console.log(`Watermark applied successfully to ${output}`);
  } catch (error) {
    console.error('Error applying watermark:', error);
  }
}

// function formatDate(date, format) {
//   const parts = format.split('/');
//   const [month, day, year] = date.split('-');
//   const formattedDate = parts.map((part) => {
//     switch (part) {
//       case 'mm':
//         return month.padStart(2, '0');
//       case 'DD':
//         return day.padStart(2, '0');
//       case 'yyyy':
//         return year;
//       default:
//         return part;
//     }
//   });
//   return formattedDate.join('/');
// }

// Usage example
const data = {
  files: [
    {
      filePath: './input/LTFS_MC1072_Insurance-Mela_1-4-2023_9_48.png',
      outputPath: './output/LTFS_MC1072_Insurance-Mela_1-4-2023_9_48.png',
      text1: 'MC1262-Sultanganj',
      text2: 'Biharangalpur-Bihar-South',
      date: '4/1/2023',
      format: 'mm/dd/yyyy',
    },
    {
      filePath: './input/LTFS_MC1072_Standee_1-4-2023_9_48.png',
      outputPath: './output/LTFS_MC1072_Standee_1-4-2023_9_48.png',
      text1: 'MC1265-Khagaria',
      text2: 'Khagaria-Bihar-South',
      date: '4/1/2023',
      format: 'mm/dd/yyyy',
    },
  ],
};

const demo = {
  files: [
    {
      filePath: './input/demo1.png',
      outputPath: './output/demo1.png',
      text1: 'Demo file 1',
      text2: 'Demo file 2',
      date: '10-06-2023',
      format: 'mm/DD/yyyy',
    },
    {
      filePath: './input/demo2.png',
      outputPath: './output/demo2.png',
      text1: 'Demo file 1',
      text2: 'Demo file 2',
      date: '10-06-2023',
      format: 'mm/DD/yyyy',
    },]
}




const inputFile = [
  {
    "input": "LTFS_MC1072_Insurance-Mela_1-4-2023_9_48.png",
    "output": "LTFS_MC1072_Insurance-Mela_1-4-2023_9_48.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1072_Standee_1-4-2023_9_48.png",
    "output": "LTFS_MC1072_Standee_1-4-2023_9_48.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1125_Insurance-Mela_1-4-2023_7_24.png",
    "output": "LTFS_MC1125_Insurance-Mela_1-4-2023_7_24.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1125_Photo-of-TV_1-4-2023_7_24.png",
    "output": "LTFS_MC1125_Photo-of-TV_1-4-2023_7_24.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1125_Standee_1-4-2023_7_24.png",
    "output": "LTFS_MC1125_Standee_1-4-2023_7_24.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1468_Insurance-Mela_1-4-2023_11_14.png",
    "output": "LTFS_MC1468_Insurance-Mela_1-4-2023_11_14.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1468_Photo-of-TV_1-4-2023_11_14.png",
    "output": "LTFS_MC1468_Photo-of-TV_1-4-2023_11_14.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1468_Standee_1-4-2023_11_14.png",
    "output": "LTFS_MC1468_Standee_1-4-2023_11_14.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1547_Insurance-Mela_1-4-2023_9_46.png",
    "output": "LTFS_MC1547_Insurance-Mela_1-4-2023_9_46.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1547_Photo-of-TV_1-4-2023_9_46.png",
    "output": "LTFS_MC1547_Photo-of-TV_1-4-2023_9_46.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1547_Standee_1-4-2023_9_46.png",
    "output": "LTFS_MC1547_Standee_1-4-2023_9_46.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1593_Insurance-Mela_1-4-2023_9_20.png",
    "output": "LTFS_MC1593_Insurance-Mela_1-4-2023_9_20.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1593_Photo-of-TV_1-4-2023_9_20.png",
    "output": "LTFS_MC1593_Photo-of-TV_1-4-2023_9_20.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1593_Standee_1-4-2023_9_20.png",
    "output": "LTFS_MC1593_Standee_1-4-2023_9_20.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1677_Insurance-Mela_1-4-2023_12_27.png",
    "output": "LTFS_MC1677_Insurance-Mela_1-4-2023_12_27.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1677_Photo-of-TV_1-4-2023_12_27.png",
    "output": "LTFS_MC1677_Photo-of-TV_1-4-2023_12_27.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1677_Standee_1-4-2023_12_27.png",
    "output": "LTFS_MC1677_Standee_1-4-2023_12_27.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1719_Insurance-Mela_1-4-2023_10_12.png",
    "output": "LTFS_MC1719_Insurance-Mela_1-4-2023_10_12.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1719_Photo-of-TV_1-4-2023_10_12.png",
    "output": "LTFS_MC1719_Photo-of-TV_1-4-2023_10_12.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1719_Standee_1-4-2023_10_12.png",
    "output": "LTFS_MC1719_Standee_1-4-2023_10_12.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1724_Insurance-Mela_1-4-2023_11_57.png",
    "output": "LTFS_MC1724_Insurance-Mela_1-4-2023_11_57.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1724_Photo-of-TV_1-4-2023_11_57.png",
    "output": "LTFS_MC1724_Photo-of-TV_1-4-2023_11_57.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1724_Standee_1-4-2023_11_57.png",
    "output": "LTFS_MC1724_Standee_1-4-2023_11_57.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1738_Insurance-Mela_1-4-2023_9_12.png",
    "output": "LTFS_MC1738_Insurance-Mela_1-4-2023_9_12.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1738_Photo-of-TV_1-4-2023_9_12.png",
    "output": "LTFS_MC1738_Photo-of-TV_1-4-2023_9_12.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1747_Insurance-Mela_1-4-2023_7_18.png",
    "output": "LTFS_MC1747_Insurance-Mela_1-4-2023_7_18.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1747_Photo-of-TV_1-4-2023_7_18.png",
    "output": "LTFS_MC1747_Photo-of-TV_1-4-2023_7_18.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1747_Standee_1-4-2023_7_18.png",
    "output": "LTFS_MC1747_Standee_1-4-2023_7_18.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1850_Insurance-Mela_1-4-2023_9_17.png",
    "output": "LTFS_MC1850_Insurance-Mela_1-4-2023_9_17.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1850_Photo-of-TV_1-4-2023_9_17.png",
    "output": "LTFS_MC1850_Photo-of-TV_1-4-2023_9_17.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1850_Standee_1-4-2023_9_17.png",
    "output": "LTFS_MC1850_Standee_1-4-2023_9_17.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1889_Insurance-Mela_1-4-2023_9_26.png",
    "output": "LTFS_MC1889_Insurance-Mela_1-4-2023_9_26.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1889_Photo-of-TV_1-4-2023_9_26.png",
    "output": "LTFS_MC1889_Photo-of-TV_1-4-2023_9_26.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1889_Standee_1-4-2023_9_26.png",
    "output": "LTFS_MC1889_Standee_1-4-2023_9_26.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1893_Insurance-Mela_1-4-2023_11_45.png",
    "output": "LTFS_MC1893_Insurance-Mela_1-4-2023_11_45.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1893_Photo-of-TV_1-4-2023_11_45.png",
    "output": "LTFS_MC1893_Photo-of-TV_1-4-2023_11_45.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1893_Standee_1-4-2023_11_45.png",
    "output": "LTFS_MC1893_Standee_1-4-2023_11_45.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1956_Insurance-Mela_1-4-2023_10_8.png",
    "output": "LTFS_MC1956_Insurance-Mela_1-4-2023_10_8.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1956_Photo-of-TV_1-4-2023_10_8.png",
    "output": "LTFS_MC1956_Photo-of-TV_1-4-2023_10_8.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC1956_Standee_1-4-2023_10_8.png",
    "output": "LTFS_MC1956_Standee_1-4-2023_10_8.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2089_Photo-of-TV_1-4-2023_7_47.png",
    "output": "LTFS_MC2089_Photo-of-TV_1-4-2023_7_47.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2089_Standee_1-4-2023_7_47.png",
    "output": "LTFS_MC2089_Standee_1-4-2023_7_47.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2325_Insurance-Mela_1-4-2023_7_11.png",
    "output": "LTFS_MC2325_Insurance-Mela_1-4-2023_7_11.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2325_Photo-of-TV_1-4-2023_7_11.png",
    "output": "LTFS_MC2325_Photo-of-TV_1-4-2023_7_11.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2325_Standee_1-4-2023_7_11.png",
    "output": "LTFS_MC2325_Standee_1-4-2023_7_11.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2356_Insurance-Mela_1-4-2023_7_24.png",
    "output": "LTFS_MC2356_Insurance-Mela_1-4-2023_7_24.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2356_Photo-of-TV_1-4-2023_7_24.png",
    "output": "LTFS_MC2356_Photo-of-TV_1-4-2023_7_24.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2356_Standee_1-4-2023_7_24.png",
    "output": "LTFS_MC2356_Standee_1-4-2023_7_24.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2363_Insurance-Mela_1-4-2023_11_23.png",
    "output": "LTFS_MC2363_Insurance-Mela_1-4-2023_11_23.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2363_Photo-of-TV_1-4-2023_11_23.png",
    "output": "LTFS_MC2363_Photo-of-TV_1-4-2023_11_23.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2363_Standee_1-4-2023_11_23.png",
    "output": "LTFS_MC2363_Standee_1-4-2023_11_23.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2365_Insurance-Mela_1-4-2023_8_39.png",
    "output": "LTFS_MC2365_Insurance-Mela_1-4-2023_8_39.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2365_Photo-of-TV_1-4-2023_8_39.png",
    "output": "LTFS_MC2365_Photo-of-TV_1-4-2023_8_39.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2365_Standee_1-4-2023_8_39.png",
    "output": "LTFS_MC2365_Standee_1-4-2023_8_39.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2371_Insurance-Mela_1-4-2023_8_39.png",
    "output": "LTFS_MC2371_Insurance-Mela_1-4-2023_8_39.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2371_Photo-of-TV_1-4-2023_8_39.png",
    "output": "LTFS_MC2371_Photo-of-TV_1-4-2023_8_39.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2371_Standee_1-4-2023_8_39.png",
    "output": "LTFS_MC2371_Standee_1-4-2023_8_39.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2456_Photo-of-TV_1-4-2023_9_33.png",
    "output": "LTFS_MC2456_Photo-of-TV_1-4-2023_9_33.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2477_Insurance-Mela_1-4-2023_7_7.png",
    "output": "LTFS_MC2477_Insurance-Mela_1-4-2023_7_7.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2477_Standee_1-4-2023_7_7.png",
    "output": "LTFS_MC2477_Standee_1-4-2023_7_7.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2546_Standee_1-4-2023_7_21.png",
    "output": "LTFS_MC2546_Standee_1-4-2023_7_21.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2555_Photo-of-TV_1-4-2023_12_10.png",
    "output": "LTFS_MC2555_Photo-of-TV_1-4-2023_12_10.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2555_Standee_1-4-2023_12_10.png",
    "output": "LTFS_MC2555_Standee_1-4-2023_12_10.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC2591_Standee_1-4-2023_7_9.png",
    "output": "LTFS_MC2591_Standee_1-4-2023_7_9.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC409_Insurance-Mela_1-4-2023_12_21.png",
    "output": "LTFS_MC409_Insurance-Mela_1-4-2023_12_21.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC409_Photo-of-TV_1-4-2023_12_21.png",
    "output": "LTFS_MC409_Photo-of-TV_1-4-2023_12_21.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC409_Standee_1-4-2023_12_21.png",
    "output": "LTFS_MC409_Standee_1-4-2023_12_21.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC801_Insurance-Mela_1-4-2023_8_59.png",
    "output": "LTFS_MC801_Insurance-Mela_1-4-2023_8_59.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC801_Photo-of-TV_1-4-2023_8_59.png",
    "output": "LTFS_MC801_Photo-of-TV_1-4-2023_8_59.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC801_Standee_1-4-2023_8_59.png",
    "output": "LTFS_MC801_Standee_1-4-2023_8_59.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  },
  {
    "input": "LTFS_MC928_Standee_1-4-2023_12_30.png",
    "output": "LTFS_MC928_Standee_1-4-2023_12_30.png",
    "format": "mm/dd/yyyy",
    "date": "4/1/2023"
  }
]

async function applyWatermark() {
  for (const file of inputFile) {
    await textOverlayWatermark(file);
  }
}

applyWatermark();
