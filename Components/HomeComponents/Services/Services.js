/* eslint-disable prettier/prettier */
import {
  FlatList,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Styles} from '../../../Styles/PoggoPayStyles';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Item = ({item, onPress}) => (
  <View>
    <View>
      <View style={Styles.cards}>
        <View style={Styles.cardBox}>
          <Text style={Styles.textCard}>{item.Title}</Text>
          <Text style={Styles.costText}>${item.Cost}.00</Text>
          <View style={Styles.seeMoreBox}>
            <TouchableOpacity onPress={onPress} style={Styles.seeMoreButton}>
              <Text style={Styles.seeMoreText}>See more</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  </View>
);

const Service = ({}) => {
  const navigation = useNavigation();
  const DATA = [
    {
      id: 1,
      Cost: '150',
      Title: 'General Services',
      Description:
        'We provide overall medical, surgical and other services for small companion animals. We use the most progressive medical equipment and computer technology to facilitate and assist in providing the best care for your pet. We use conventional technology while staying up to date on the latest medical developments.',
    },
    {
      id: 2,
      Cost: '150',
      Title: 'Surgery',
      Description: 'We have a modern operating room .',
    },
    {
      id: 3,
      Cost: '150',
      Title: 'Dental Care',
      Description:
        'We are ready and well equipped to care  your pets dental needs, using dental ultrasonic scaling, polishing, power dental float.',
    },
    {
      id: 4,
      Cost: '150',
      Title: 'Radiology',
      Description:
        'We have a modern digital x-ray machine, with the ability of  generating excellent quality radiographs. This will assist with identifying any medical and surgical problems, x-rays are a very successful diagnostic tool.',
    },
    {
      id: 5,
      Cost: '150',
      Title: 'Anesthesia',
      Description:
        'Our doctors use the most up-to-date and safest anesthetic drugs. We use isoflurane anesthetic gas. Your pet´s post-operative comfort needs are closely monitored and our doctors are available for any questions or concerns.',
    },
    {
      id: 6,
      Cost: '150',
      Title: 'Immunizations',
      Description:
        'Keeping your pet up to date with vaccines is a major key in their well being. Immunizations are to protect your pet against respiratory and intestinal diseases. Our vaccines include Leukemia, FVRCP(3 in 1 vaccine) it includes: Rhinotracheitis, Calicvirus and Panleukopenia for cats. For dogs Da2ppv (4 in 1 vaccine) it includes: Distemper, Hepititis, Parvovirus and Parainfluenza our other vaccines would be Rabies, Bordetella and we also have the rattlesnake vaccine available. Vaccines along with heartworm, flea and tick control are part of preventive health care for dogs and cats. Ask us for a copy of the vaccination guidelines and recommendations.',
    },
    {
      id: 7,
      Cost: '150',
      Title: 'Pharmacy.',
      Description:
        'For our pet owners convenience, we have an in house pharmacy with inventory of veterinary drugs, supplies, medications, prescription foods and nutritional supplements. Ask us about our promotions for Heartgard heartworm preventives.',
    },
    {
      id: 8,
      Cost: '150',
      Title: 'Laboratory',
      Description:
        'We have a full service in-house laboratory, which also assists us to obtain accurate information about your pet´s health. Blood testing can pinpoint many health problems, including infection, anemia, liver and kidney disorders, diabetes, thyroid disease and cancer. We also have all lab history available if patient needs to be referred to a specialist.',
    },
    {
      id: 9,
      Cost: '150',
      Title: 'Emergency & Urgent Care',
      Description:
        'We have a veterinarian and personnel on duty six days a week who are trained and equipped to handle any urgent care your pet has. Usually an emergency team consists of at least one veterinarian and several technicians working together to save a pet´s life. Emergencies can be things such as accidental ingestion of rat poison, hit by car, and chocolate ingestion. If you ever feel that your pet needs emergency treatment do not hesitate to call or come in immediately. We are also available for urgent care when the condition is not life-threatening. If you feel your pet needs to be seen before you are able to get an appointment, our veterinarians will work to "squeeze" you in between scheduled appointments. When you arrive, our receptionists will be able to give you an estimate on how long you may have to wait in order to be seen.',
    },
    {
      id: 10,
      Cost: '150',
      Title: 'Wellness Exams and Immunizations',
      Description:
        'Companion animals living a healthier life with proper preventive health care is the best way to enjoy them more and longer. We offer and recommend annual physical exams for all animals. Several health problems can be determined from a doctors examination, some of them are: dental disease, early lameness issues, or glaucoma.',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('Services', {service: item})}
      />
    );
  };
  return (
    <SafeAreaView>
      <View style={Styles.titleBox}>
        <FAIcon
          name="briefcase-medical"
          size={18}
          color="#FB8500"
          style={Styles.icons}
        />
        <Text style={Styles.titleText}>
          Eastl
          <Text>ake Services</Text>
        </Text>
      </View>
      <View>
        <FlatList
          data={DATA}
          horizontal={true}
          decelerationRate={0}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};
export default Service;
