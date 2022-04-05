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

export default class Articule extends Component {
  render() {
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
            source={require('../../android/app/src/main/assets/fonts/petquotes.png')}
          />
        </View>
        <View style={Styles.viewSection2}>
          <View style={Styles.boxTitle}>
            <View style={Styles.titleBox2}>
              <MaterialIcons
                name="article"
                size={18}
                color="#FB8500"
                style={Styles.icons}
              />
              <Text style={Styles.titleText}>
                Arti
                <Text>cule</Text>
              </Text>
            </View>
          </View>
          

          <View style={Styles.textBox}>
            <Text style={Styles.infoText}>
              We're pleased to offer the following services at Eastlake Animal
              Clinic:
            </Text>
          </View>

          <Image style={Styles.lineImage2}
            source={require('../../android/app/src/main/assets/fonts/Vectorline.png')}
          />

          <View style={Styles.articuleBox2}>
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
        </View>
      </ScrollView>
    );
  }
}
