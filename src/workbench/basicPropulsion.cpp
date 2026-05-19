int pinoSensorLuz = A0;
int pinoMosfet = 9;
int valorReturned = 0;
bool solenoideActived = false;

void setup()
{
    Serial.begin(9600);
    pinMode(pinoMosfet, OUTPUT);
    delay(1000); // Pausa por 1s antes de começar a ler o sensor
}

void loop()
{
    // Lê a voltagem no pino A0 (retorna um número de 0 a 1023)
    valorReturned = analogRead(pinoSensorLuz);

    // Imprime o texto e o valor capturado
    Serial.print("Intensidade luminosa LDR: ");
    Serial.println(valorReturned);

    if (valorReturned < 100)
    {
        if (solenoideActived == false)
        {
            digitalWrite(pinoMosfet, HIGH);
            delay(1500);
            solenoideActived = true;
        }
        else
        {
            digitalWrite(pinoMosfet, LOW);
            delay(1500);
            solenoideActived = false;
        }
    }

    // Espera 100 milissegundos para não congestionar a porta USB
    delay(100);
}
