/* eslint-disable prettier/prettier */
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import {Formik} from 'formik';
import React, {Component} from 'react';
import {Styles} from '../../Styles/PoggoPayStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Credit extends Component {
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
          {/* <View style={Styles.boxTitle2}>
            <View style={Styles.titleBox2}>
              <Text style={Styles.titleText}>Credit</Text>
            </View>
          </View> */}

          <Formik
            initialValues={
              { 
                product: '',
                pourposeCredit:'',
                requestAmount: '',
                oftenPay: '',
                termMonths: '',
                firstName: '',
                lastName: '',
                email: '',
                city: '',
              }
            }
            onSubmit={values => console.log(values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View style={Styles.formBox}>
                <Text style={Styles.labelText}>Product</Text>
                <TextInput
                  style={Styles.input}
                  onChangeText={handleChange('product')}
                  onBlur={handleBlur('product')}
                  value={values.product}
                />
                <Text style={Styles.labelText}>Purpose of credit</Text>
                <TextInput
                  style={Styles.input}
                  onChangeText={handleChange('pourposeCredit')}
                  onBlur={handleBlur('pourposeCredit')}
                  value={values.pourposeCredit}
                />
                <Text style={Styles.labelText}>Request amount</Text>
                <TextInput
                  keyboardType="numeric"
                  style={Styles.input}
                  onChangeText={handleChange('requestAmount')}
                  onBlur={handleBlur('requestAmount')}
                  value={values.requestAmount}
                />
                <Text style={Styles.labelText}>How often are you paid?</Text>
                <TextInput
                  style={Styles.input}
                  onChangeText={handleChange('oftenPay')}
                  onBlur={handleBlur('oftenPay')}
                  value={values.oftenPay}
                />
                <Text style={Styles.labelText}>Term/Months</Text>
                <TextInput
                  keyboardType="numeric"
                  style={Styles.input}
                  onChangeText={handleChange('termMonths')}
                  onBlur={handleBlur('termMonths')}
                  value={values.termMonths}
                />
                <View style={Styles.titleBox3}>
                  <MaterialIcons
                    name="person-pin"
                    size={20}
                    color="#FB8500"
                    style={Styles.icons}
                  />
                  <Text style={Styles.titleForm}>Personal information</Text>
                </View>
                <Text style={Styles.labelText}>First Name:</Text>
                <TextInput
                  style={Styles.input}
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                />
                <Text style={Styles.labelText}>Last Name:</Text>
                <TextInput
                  style={Styles.input}
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                />
                <Text style={Styles.labelText}>Email:</Text>
                <TextInput
                  keyboardType="email-address"
                  style={Styles.input}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <Text style={Styles.labelText}>City</Text>
                <TextInput
                  style={Styles.input}
                  onChangeText={handleChange('city')}
                  onBlur={handleBlur('city')}
                  value={values.city}
                />
                <View style={Styles.titleBox3}>
                  <MaterialIcons
                    name="person-pin"
                    size={20}
                    color="#FB8500"
                    style={Styles.icons}
                  />
                  <Text style={Styles.titleForm}>Requirement Document</Text>
                </View>

                <View style={Styles.docsBottonBox}>
                  <TouchableOpacity style={Styles.docsBotton}>
                    <Text style={Styles.blueButtonText}>
                      Download Document for credit
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={Styles.submitBox}>
                  <TouchableOpacity
                    style={Styles.submitBotton}
                    onPress={handleSubmit}
                    title="Submit">
                    <Text style={Styles.blueButtonText}>Apply for credit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    );
  }
}
