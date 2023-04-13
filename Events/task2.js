<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" id="inp" name="inp"  value="" placeholder="enter anything">
    <input type="button"  value="display" onclick="a()">
    <script>
        function a()
        {
            var input=document.getElementById("inp").value;
            alert(input)
        }
    </script>
</body>
</html>