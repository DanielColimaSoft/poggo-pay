/* eslint-disable prettier/prettier */
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {Styles} from '../../Styles/PoggoPayStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Services from '../../Components/HomeComponents/Services/Services';
import Location from '../../Components/HomeComponents/Location/Location';

const Home = ({navigation}) => {
  return (
    <ScrollView
      decelerationRate={'normal'}
      showsVerticalScrollIndicator={false}>
      <View style={Styles.topContainer}>
        <View style={Styles.elipseRight}>
          <Image
            source={require('../../android/app/src/main/assets/fonts/Ellipse13.png')}
          />
        </View>
        <View style={Styles.titleContainer}>
          <Text style={Styles.textTitle}>Poggo Pay</Text>
        </View>
        <View style={Styles.elipseLeft}>
          <Image
            source={require('../../android/app/src/main/assets/fonts/Ellipse14.png')}
          />
        </View>
      </View>
      <View style={Styles.petsBox}>
        <Image
          source={require('../../android/app/src/main/assets/fonts/PetsPhotoRoom1.png')}
        />
      </View>

      <View style={Styles.viewSection}>
        <View style={Styles.welcomeBox}>
          <Text style={Styles.welcomeText}>Welcome to</Text>
          <Text style={Styles.poggoText}>Poggo Pay</Text>
        </View>

        <View style={Styles.blueBottonBox}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Credit');
            }}
            style={Styles.blueBotton}>
            <Text style={Styles.blueButtonText}>Buy now Pay Later</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={Styles.lineImage}
            source={require('../../android/app/src/main/assets/fonts/Vector2.png')}
          />
        </View>

        <View style={Styles.statusCredit}>
          <TouchableOpacity>
            <Text style={Styles.statusCreditText}>Check Status Credit</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={Styles.imageR}> */}
        {/* <ImageBackground source={require('../../android/app/src/main/assets/fonts/VectorR.png')} /> */}
        {/* </View> */}

        <View>
          <Services />
        </View>

        <View>
          <Location />
        </View>

        <View>
          <Image
            style={Styles.line2Image}
            source={require('../../android/app/src/main/assets/fonts/Vector1.png')}
          />
        </View>

        <View style={Styles.titleBoxHome}>
          <AntDesign
            name="clockcircle"
            size={18}
            color="#FB8500"
            style={Styles.icons}
          />
          <Text style={Styles.titleText}>
            Eastl
            <Text>ake Office Hours</Text>
          </Text>
        </View>
        <View style={Styles.cardHourBox}>
          <View style={Styles.cardHour}>
            <Text style={Styles.hourTitle}>Mon</Text>
            <Text style={Styles.hour}>8:00 am</Text>
            <Text style={Styles.hour}>6:00 pm</Text>
          </View>
          <View style={Styles.cardHour}>
            <Text style={Styles.hourTitle}>Thurs</Text>
            <Text style={Styles.hour}>8:00 am</Text>
            <Text style={Styles.hour}>6:00 pm</Text>
          </View>
          <View style={Styles.cardHour}>
            <Text style={Styles.hourTitle}>Wed</Text>
            <Text style={Styles.hour}>8:00 am</Text>
            <Text style={Styles.hour}>6:00 pm</Text>
          </View>
          <View style={Styles.cardHour}>
            <Text style={Styles.hourTitle}>Tues</Text>
            <Text style={Styles.hour}>8:00 am</Text>
            <Text style={Styles.hour}>6:00 pm</Text>
          </View>
        </View>
        <View style={Styles.cardHourBox}>
          <View style={Styles.cardHour}>
            <Text style={Styles.hourTitle}>Fri</Text>
            <Text style={Styles.hour}>8:00 am</Text>
            <Text style={Styles.hour}>6:00 pm</Text>
          </View>
          <View style={Styles.cardHour}>
            <Text style={Styles.hourTitle}>Sat</Text>
            <Text style={Styles.hour}>8:00 am</Text>
            <Text style={Styles.hour}>6:00 pm</Text>
          </View>
          <View style={Styles.cardHour}>
            <Text style={Styles.hourTitle}>Sun</Text>
            <Text style={Styles.hour}>8:00 am</Text>
            <Text style={Styles.hour}>6:00 pm</Text>
          </View>
        </View>
        <View style={Styles.boneImage}>
          <Image
            source={require('../../android/app/src/main/assets/fonts/Group.png')}
          />
        </View>

        <View style={Styles.titleBox}>
          <MaterialIcons
            name="article"
            size={18}
            color="#FB8500"
            style={Styles.icons}
          />
          <Text style={Styles.titleText}>
            Eastl
            <Text>ake Articule</Text>
          </Text>
        </View>

        <View style={Styles.articuleBox}>
          <View style={Styles.articuleCard}>
            <View>
              <Image
                source={require('../../android/app/src/main/assets/fonts/Rectangle1.png')}
              />
            </View>
            <View style={Styles.artextBox}>
              <Text style={Styles.artitleText}>
                Signs That Your Cat is Experiencing Pain
              </Text>
              <Text style={Styles.artText}>
                Do you know when your cat is in pain? ...
              </Text>
              <TouchableOpacity style={Styles.readmoreButton}>
                <Text style={Styles.readmoreText}>Read more</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.articuleCard}>
            <View>
              <Image
                source={require('../../android/app/src/main/assets/fonts/Rectangle2.png')}
              />
            </View>
            <View style={Styles.artextBox}>
              <Text style={Styles.artitleText}>
                Does Your Dog Have a Sleep Disorder?
              </Text>
              <Text style={Styles.artText}>
                Wondering why your dog seems tired during the day? A sleep
                disorder could be to blame...
              </Text>
              <TouchableOpacity style={Styles.readmoreButton}>
                <Text style={Styles.readmoreText}>Read more</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={Styles.blueBottonBox2}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Article');
            }}
            style={Styles.blueBotton}>
            <Text style={Styles.blueButtonText}>More articule</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
