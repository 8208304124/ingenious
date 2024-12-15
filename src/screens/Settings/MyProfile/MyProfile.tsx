import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { styles } from './Style';

function MyProfile() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.safeAreaContainer}>
        <View style={[styles.Container, { marginTop: 10 }]}>
          <Text style={styles.title}>About VishwaLaw</Text>
          <Image
            resizeMode="cover"
            style={styles.imageStyle}
            source={{
              uri: 'https://media.istockphoto.com/id/520959651/photo/businessman-presenting-to-an-audience.jpg?s=612x612&w=0&k=20&c=95K-rSzeH3mvbR7TYsFDA9HjJzDT3MaE5-1LTFLVmWY=',
            }}
          />
          <Text style={styles.simpleText}>
            At the heart of India rapidly evolving legal landscape lies Vishwaguru Ingenious—a
            pioneering entity under the visionary leadership of Adv. (Dr.) Harita Shinde Bangali.
            Incorporated as a One Person Company under the Companies Act, 2013, Vishwaguru Ingenious
            (CIN: U85500PN2023OPC226845) is not just a company; it a movement to redefine legal
            education and consultancy.
          </Text>
        </View>
        <View style={styles.Container}>
          <Text style={styles.title}>Born from Passion and Expertise</Text>
          <Text style={styles.simpleText}>
            Vishwaguru Ingenious was conceived from the passion and dedication of Adv. (Dr.) Harita
            Shinde Bangali, whose commitment to excellence in the legal field inspired the creation
            of an institution dedicated to providing top-tier educational support services. But
            Vishwaguru is more than just an educational institution—it’s a beacon of legal
            expertise. Our team is a blend of seasoned professionals, including lawyers with over
            two decades of litigation experience, Chartered Accountants, Company Secretaries, and
            Patent Attorneys. Together, we bring a wealth of knowledge and practical insights to the
            table, offering our clients comprehensive legal support across a multitude of areas.
          </Text>
        </View>
        <View style={styles.Container}>
          <Text style={styles.title}>A Broad Spectrum of Legal Services</Text>
          <Text style={styles.simpleText}>
            Our expertise spans from Information Technology and Cyber Security-related litigations
            to Intellectual Property Rights (IPR) consultations and compliance. Vishwaguru Ingenious
            takes pride in its role as a trusted advisor and consultant, representing clients in
            courts across India, from the lower courts to the High Courts and the Supreme Court. We
            specialize in Corporate Agreements, dispute settlements, and litigation, ensuring that
            our clients receive the most effective and futuristic legal solutions tailored to their
            unique needs.
          </Text>
        </View>
        <View style={styles.Container}>
          <Text style={styles.title}>A Vision for the Future</Text>
          <Text style={styles.simpleText}>
            Vishwaguru Ingenious is not just a law firm; it’s a value-driven entity with a clear
            vision for the future. Our mission is to empower our clients with innovative legal
            solutions that are both practical and forward-thinking. As we continue to grow and
            expand our services, our commitment to delivering excellence remains unwavering. Join us
            on our journey as we continue to build a legacy of trust, expertise, and innovation in
            the legal field.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MyProfile;
