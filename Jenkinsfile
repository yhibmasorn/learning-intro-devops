pipeline{
    agent any
    environment {
        DOCKER_IMAGE = 'gcr.io/YhibMaSorn/NestJS-API:${BUILD_NUMBER}'

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
                    sh "docker build -t ${DOCKER_IMAGE}"
                    sh "gcloud auth configure-docker"
                    sh "docker push ${DOCKER_IMAGE}"
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