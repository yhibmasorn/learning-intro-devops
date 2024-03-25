pipeline{
    agent any
    environment {
        DOCKER_IMAGE = 'nestjs-app'

    }

    stages{
        stage('Checkout'){
            steps{
                checkout scm

            }

        }

        stage('Build'){
            steps{
                script{
                    docker.build("$DOCKER_IMAGE:latest")
                }

            }

        }

    }

}