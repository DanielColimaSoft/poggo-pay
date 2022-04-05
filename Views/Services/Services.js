/* eslint-disable prettier/prettier */
import {Text, View, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {Styles} from '../../Styles/PoggoPayStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

const Services = route => {
  if (!route.route.params) {
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
        <View style={Styles.petsBox2}>
          <Image
            source={require('../../android/app/src/main/assets/fonts/Pets3.png')}
          />
        </View>
        <View style={Styles.viewSection3}>
          <View style={Styles.boxTitle}>
            <View style={Styles.titleBox2}>
              <FAIcon
                name="briefcase-medical"
                size={18}
                color="#FB8500"
                style={Styles.icons}
              />
              <Text style={Styles.titleText}>Services</Text>
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

          <View style={Styles.serviceBoxGeneric}>
            <View style={Styles.cardServicesBoxGeneric}>
              <Text style={Styles.cardTitleGeneric}>Other Services</Text>
              <Text style={Styles.cardTextGeneric}>
                Include nail trims and anal gland expression
              </Text>
            </View>
            <View style={Styles.pawImage}>
              <Image
            source={require('../../android/app/src/main/assets/fonts/Paw2.png')}
          />
            </View>
            <View style={Styles.cardServicesBoxGeneric}>
              <Text style={Styles.cardTitleGeneric}>Types of Pets Seen</Text>
              <Text style={Styles.cardTextGeneric}>
                Because a large number of veterinarians practice at Eastlake
                Animal Clinic, we can care for:
              </Text>
              <Text style={Styles.cardTextGeneric}>Dogs</Text>
              <Text style={Styles.cardTextGeneric}>Cats</Text>
            </View>
          </View>
          <Image
            source={require('../../android/app/src/main/assets/fonts/Paw1.png')}
          />
        </View>
      </ScrollView>
    );
  }
  const service = route.route.params.service;

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
      <View style={Styles.petsBox2}>
        <Image
          source={require('../../android/app/src/main/assets/fonts/Pets3.png')}
        />
      </View>
      <View style={Styles.viewSection3}>
        <View style={Styles.boxTitle}>
          <View style={Styles.titleBox2}>
            <FAIcon
              name="briefcase-medical"
              size={18}
              color="#FB8500"
              style={Styles.icons}
            />
            <Text style={Styles.titleText}>Services</Text>
          </View>
        </View>

        <Image style={Styles.lineImage2}
            source={require('../../android/app/src/main/assets/fonts/Vectorline.png')}
          />

        <View style={Styles.serviceBox}>
          <View style={Styles.cardServicesBox}>
            <Text style={Styles.cardTitle}>{service.Title}</Text>
            <Text style={Styles.cardText}>{service.Description}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Services;
