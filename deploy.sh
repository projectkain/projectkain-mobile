
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $1 ./platforms/android/build/outputs/apk/$2 my-alias
~/Android/Sdk/build-tools/25.0.0/zipalign -v 4 ./platforms/android/build/outputs/apk/$2 $3
