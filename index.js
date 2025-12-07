import { View, Text, Image, ScrollView, Linking, StyleSheet } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Image source={require("../assets/foto.jpg")} style={styles.foto} />

        <View style={{ flex: 1 }}>
          <Text style={styles.nome}>Edmael Paulo Ribeiro Barreto</Text>
          <Text style={styles.lead}>
            Graduando em Secretariado Executivo (UFPE) e ADS (SENAC).
            Experiência em estágios administrativos, ouvidoria e financeiro.
          </Text>

          <Text style={styles.info}>
            <Text style={styles.bold}>Endereço:</Text> Boa Viagem, Recife{"\n"}
            <Text style={styles.bold}>Telefone:</Text> (81) 90000-0000{"\n"}
            <Text style={styles.bold}>E-mail:</Text> edmael.barreto@edu.pe.senac.br
          </Text>
        </View>
      </View>

      {/* EXPERIÊNCIA */}
      <View style={styles.card}>
        <Text style={styles.h2}>Experiência Profissional</Text>

        <Text style={styles.li}>
          • <Text style={styles.bold}>Estagiário Financeiro — SPEEDMAIS</Text> (2024 - atual)
        </Text>
        <Text style={styles.sub}>Conciliação bancária e relatórios.</Text>

        <Text style={styles.li}>
          • <Text style={styles.bold}>Ouvidoria TRE-PE</Text> (2023 - 2024)
        </Text>
        <Text style={styles.sub}>
          Atendimento, minutas, mapeamento de processos.
        </Text>

        <Text style={styles.li}>
          • <Text style={styles.bold}>PROPESQI — UFPE</Text> (2020 - 2023)
        </Text>
        <Text style={styles.sub}>Certificados, editais, suporte ao CONIC.</Text>

        <Text style={styles.li}>
          • <Text style={styles.bold}>TRT6 Sustentabilidade</Text> (2022 - 2023)
        </Text>
        <Text style={styles.sub}>Arquivos, atendimento e apoio interno.</Text>
      </View>

      {/* FORMAÇÃO */}
      <View style={styles.card}>
        <Text style={styles.h2}>Formação Acadêmica</Text>
        <Text style={styles.li}>• ADS — SENAC-PE (2024 - 2026)</Text>
        <Text style={styles.li}>• Secretariado Executivo — UFPE (2020 - 2025)</Text>

        <Text style={[styles.h2, { marginTop: 16 }]}>Soft Skills</Text>
        <Text style={styles.li}>• Empatia • Capacidade Analítica • Gestão do Tempo</Text>
        <Text style={styles.li}>• Proatividade • Resiliência</Text>

        <View style={styles.social}>
          <Image
            source={require("../assets/github.png")}
            style={styles.icon}
            onTouchEnd={() => Linking.openURL("https://github.com/EdmaelBarreto")}
          />
          <Image
            source={require("../assets/linkedin.png")}
            style={styles.icon}
            onTouchEnd={() =>
              Linking.openURL("https://www.linkedin.com/in/edmaelpauloribeirobarreto/")
            }
          />
          <Image
            source={require("../assets/lattes.png")}
            style={styles.icon}
            onTouchEnd={() => Linking.openURL("http://lattes.cnpq.br/9044417270486965")}
          />
        </View>
      </View>

      {/* LOCALIZAÇÃO */}
      <View style={styles.card}>
        <Text style={styles.h2}>Localização</Text>
        <Text style={styles.sub}>
          Abra no Google Maps: Pracinha de Boa Viagem
        </Text>

        <Text
          style={styles.mapsLink}
          onPress={() =>
            Linking.openURL(
              "https://www.google.com/maps?q=Pracinha+de+Boa+Viagem+Recife"
            )
          }
        >
          👉 Abrir no Google Maps
        </Text>
      </View>

      <Text style={styles.footer}>
        © 2025 Edmael Barreto. Todos os Direitos Reservados.
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f7fb", padding: 20 },
  header: {
    flexDirection: "row",
    gap: 20,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    elevation: 3,
  },
  foto: {
    width: 110,
    height: 110,
    borderRadius: 12,
  },
  nome: { color: "#0056b3", fontSize: 20, fontWeight: "bold" },
  lead: { marginTop: 6, color: "#444" },
  info: { marginTop: 10, color: "#555" },
  bold: { fontWeight: "bold" },

  card: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    elevation: 3,
  },
  h2: { fontWeight: "bold", color: "#0056b3", fontSize: 16, marginBottom: 10 },
  li: { marginBottom: 6, color: "#333" },
  sub: { marginLeft: 10, marginBottom: 10, color: "#555" },

  social: {
    flexDirection: "row",
    gap: 12,
    marginTop: 14,
    justifyContent: "flex-start",
  },
  icon: { width: 36, height: 36 },

  mapsLink: {
    marginTop: 10,
    color: "#0056b3",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },

  footer: {
    textAlign: "center",
    color: "#777",
    marginTop: 30,
    marginBottom: 20,
  },
});
