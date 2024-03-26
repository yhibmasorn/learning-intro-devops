pipeline{
    agent any
    environment {
        DOCKER_IMAGE = 'gcr.io/yhibmasorn/nestsj-api:${BUILD_NUMBER}'

    }

    stages{
        stage('Checkout'){
            steps{
                checkout scm

            }

        }

        stage('Build and Push Image'){
            steps{
                script{
                    withCredentials([file(credentialsId: 'jenkins-service-account', variable: 'GOOGLE_APPLICATION_CREDENTIALS')]){
                        sh '''
                        gcloud auth activate-service-account --key-file=$GOOGLE_APPLICATION_CREDENTIALS
                        gcloud auth configure-docker
                        '''

                        sh "docker build -t ${DOCKER_IMAGE} ."
                        sh "docker push ${DOCKER_IMAGE}"

                    }
                }

            }

        }

        stage('Deploy'){
            steps{
                script{
                    def serviceName = "NestJS-API-Service"
                    def region = "us-central1"
                    sh "gcloud run deploy ${serviceName} --image ${DOCKER_IMAGE} --region ${region} --platform managed --allow-unauthenticated"
                }

            }
        }

    }

    post{
        always{
            echo 'Pipeline execution complete.'
        }

    }

}