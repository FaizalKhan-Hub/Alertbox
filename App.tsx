import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
const Header = ({ title, showBackButton, showNotificationIcon }) => {
  const handleBackButtonPress = () => {
    // Handle back button press here
  };

  const handleNotificationIconPress = () => {
    // Handle notification icon press here
  };

  return (
    <View style={styles.headerContainer}>
      {showBackButton && (
        <TouchableOpacity onPress={handleBackButtonPress} style={styles.backButton}>
          <Image source={require('./assets/back.jpg')} style={styles.icon} />
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>

      {showNotificationIcon && (
        <TouchableOpacity onPress={handleNotificationIconPress} style={styles.notificationIcon}>
          <Image source={require('./assets/notification.jpg')} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const App = () => {
  const webViewRef = useRef(null);
  const data = [
    { id: '1', title: '#2003' },
    { id: '2', title: '#TODAYISMONDAY' },
    { id: '3', title: '#TOP' },
    { id: '4', title: '#POPS' },
    { id: '5', title: '#WOW' },
    { id: '6', title: '#2003' },
    { id: '7', title: '#TODAYISMONDAY' },

  ];
  const handleNativeAlert = () => {
    Alert.alert('Alert', 'Alert in React Native');
  };

  const handleWebViewMessage = (event) => {
    // const message = event.nativeEvent.data;
    // if (message === 'Alert in WebView') {
    Alert.alert('WebView Alert', 'ALert in WebView');
    // }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 5 }}>
        <Header title="스카이 킹" showBackButton showNotificationIcon />
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Image source={require('./assets/profile_image.jpg')} style={{ width: 40, height: 40, borderRadius: 50, marginRight: 10, marginLeft: 10 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20 }}>한국어 텍스트  <Image source={require('./assets/tick.jpg')} style={{ width: 25, height: 25, marginRight: 20 }} /> <Text style={{ fontSize: 13 }}>
              카이</Text></Text>
            <Text>165cm .53kg</Text>
          </View>
          <View style={{ padding: 20 }}><Text style={{ backgroundColor: "#69CCCF", borderRadius: 20, padding: 8, color: "#ffff" }}>한국어</Text></View>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>제 이름은 아카시 쿠마르입니다. 저는 가르화 자르칸드 ?</Text>
          <Text style={{ marginTop: 8 }}>제 이름은 아카시 쿠마르입니다. 저는 가르화 자르칸드에서 왔습니다. 이메일 ID는 아카시 칸시아카르입니다.?{'\n'}{'\n'}
            제 이름은 아카시 쿠마르입니다. 저는 가르화 자르칸드에서 왔습니다. 이메일 ID는 아카시 칸시아카르입니다.? {'\n'}{'\n'}
            제 이름은 아카시 쿠마르입니다. 저는 가르화 자르칸드에서 왔습니다. 이메일 ID는 아카시 칸시아카르입니다.?제 이름은 아카시 쿠마르입니다. 저는 가르화 자르칸드에서 왔습니다. 이메일 ID는 아카시 칸시아카르입니다.
          </Text>
        </View>
        <View style={{ marginLeft: 10, }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {data.map((item) => (
              <View key={item.id} style={{ padding: 3 }}>
                <Text style={{ backgroundColor: "#CFDBDB47", borderRadius: 30, padding: 7 }}>{item.title}</Text>
              </View>
            ))}
          </View>
        </View>
        {/* <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18 }}>WebView Section</Text>
        <TouchableOpacity onPress={handleNativeAlert} style={{ marginTop: 10 }}>
          <Text>Native Alert</Text>
        </TouchableOpacity>
      </View> */}
        {/* WebView */}
        <View style={{ height: 500 }}>
          <WebView
            ref={webViewRef}
            source={{
              html: `
            <!DOCTYPE html>
            <html>
            <head>
              <title>WebView Page</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
              <style>
                body {
                  font-family: Arial, sans-serif;
                  background-color: #CFDBDB85;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 100vh;
                }

                button {
                  padding: 5px 10px;
                  font-size: 16px;
                  background-color: #69CCCF;
                  color: #fff;
                  border: none;
                  border-radius: 20px;
                  cursor: pointer;
                }
              </style>
            </head>
            <div class="container">
  
  
    <!-- Indicators -->
    
    <!-- Wrapper for slides -->

      <button onclick="window.ReactNativeWebView.postMessage('Alert in WebView')">Native Alert</button>
   
      <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
</div>
</body>
            </html>
          `,
            }}
            onMessage={handleNativeAlert}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, borderBottomWidth: 2, borderColor: "#CFDBDB85" }}>
          <Image source={require('./assets/like.jpg')} style={{ width: 25, height: 25, marginLeft: 10 }} />
          <Text style={{ marginLeft: 10, fontSize: 18, color: "#0000005C" }}>
            5
          </Text>
          <Image source={require('./assets/sms.jpg')} style={{ width: 25, height: 25, marginLeft: 10 }} />
          <Text style={{ marginLeft: 10, fontSize: 18, color: "#0000005C" }}>
            5
          </Text>
          <Image source={require('./assets/tag.jpg')} style={{ width: 25, height: 25, marginLeft: 10 }} />
          <Image source={require('./assets/dot.jpg')} style={{ width: 20, height: 20, marginLeft: 10 }} />
          <View style={{ flex: 1 }}>

          </View>
          <TouchableOpacity onPress={() => handleWebViewMessage()} style={{ marginTop: 10 }}>
            <View style={{ padding: 20 }}><Text style={{ backgroundColor: "#69CCCF", borderRadius: 20, padding: 8, color: "#ffff" }}>WV Alert</Text></View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Image source={require('./assets/profile_image.jpg')} style={{ width: 40, height: 40, borderRadius: 50, marginRight: 10, marginLeft: 10 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20 }}>한국어 텍스트  <Image source={require('./assets/tick.jpg')} style={{ width: 25, height: 25, marginRight: 20 }} /> <Text style={{ fontSize: 13 }}>
              카이</Text></Text>

          </View>
          <View style={{ padding: 20 }}><Image source={require('./assets/dot.jpg')} style={{ width: 20, height: 20, marginLeft: 10 }} /></View>
        </View>
        <View style={{ marginLeft: 50, padding: 10 }}>

          <Text>제 이름은 아카시 쿠마르입니다. 저는 가르화 자르칸드에서 왔습니다. 이메일 ID는 아카시 칸시아카르입니다.?
            ID는 아카시 칸시아카르입니다.?
            제 이름은 아카시 쿠마르입니다. 저는 가르화 자르칸드에서 왔습니다. 이메일 ID는 아카시 칸시아카르입니다.?제 이름은 아카시 쿠마르입니다. 저는 가르화 자르칸드에서 왔습니다. 이메일 ID는 아카시 칸시아카르입니다.
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Image source={require('./assets/like.jpg')} style={{ width: 20, height: 20, }} />
            <Text style={{ marginLeft: 10, fontSize: 18, color: "#0000005C" }}>
              5
            </Text>
            <Image source={require('./assets/sms.jpg')} style={{ width: 20, height: 20, marginLeft: 10 }} />
            <Text style={{ marginLeft: 10, fontSize: 18, color: "#0000005C" }}>
              5
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Image source={require('./assets/profile_image.jpg')} style={{ width: 40, height: 40, borderRadius: 50, marginRight: 10, marginLeft: 10 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 20 }}>한국어 <Text style={{ fontSize: 13 }}>
                카이</Text></Text>

            </View>
            <Image source={require('./assets/dot.jpg')} style={{ width: 20, height: 20, }} />

          </View>
          <Text style={{ marginLeft: 60 }}>
            제 이름은 아카시 쿠마르입니다.
          </Text>
          <View style={{ marginLeft: 60, flexDirection: "row", marginTop: 5, }}>

            <Image source={require('./assets/like.jpg')} style={{ width: 25, height: 25, }} />
            <Text style={{ alignSelf: "center", marginLeft: 5, color: "#0000005C" }}>5</Text>
          </View>

        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', borderTopWidth: 1, borderColor: "#CFDBDB85" }}>
          <Image source={require('./assets/pic.jpg')} style={{ width: 40, height: 40, marginRight: 10, marginLeft: 10 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 15 }}>한국어 텍스트   </Text>

          </View>
          <View style={{ padding: 20 }}><Text>한국어</Text></View>
        </View>

      </View>

    </ScrollView>
  );
};

const styles = {
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 84,
    backgroundColor: '#fff',

  },
  backButton: {
    padding: 8,
  },
  notificationIcon: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
};
export default App;
