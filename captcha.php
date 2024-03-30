header("Content-Type: image/jpeg");

$string = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
$captchaText = substr(str_shuffle($string), 0, 6);
$image = imagecreate(120, 40);
$color = imagecolorallocate($image, 255, 255, 255);
$font = "arial.ttf";

imagettftext($image, 20, 0, 10, 30, $color, $font, $captchaText);
imagejpeg($image);

$_SESSION["captcha"] = $captchaText;