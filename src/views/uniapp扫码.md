<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      //   scanCode
      uni.scanCode({
        onlyFromCamera: true,
        scanType: ["barcode", "qcCode"],
        success: (res) => {},
        fail: (res) => {},
        complete: (res) => {},
      });
      //   返回的参数里面主要有
      //   result
      //   scanType
      //   code
      //   charSet
      //   qrCode
      //   barCode
      uni.scanCode({
        onlyFromCamera: true,
        scanType: ["barCode", "qrCode", "datamatrix", "pdf417"],
        success: (res) => {},
        fail: (res) => {},
        complete: (res) => {},
      });
      返回结果
      result
      code
      qrCode
      barCode
      scanType 
      charSet
      返回二维码携带的path
    </script>
  </body>
</html>
