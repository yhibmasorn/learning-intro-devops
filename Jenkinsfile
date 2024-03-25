pipeline{
    agent any
    environment {
        DOCKER_IMAGE = 'nestjs-app'

    }

    stages{
        stage('Prepare'){
            steps{
                script{
                     if (isUnix()) {
                        sh 'nohup command > output.log 2>&1 &'
                    } else {
                        bat 'start /B command > output.log 2>&1'
                    }
                }
            }

        }

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

        stage('Deploy'){
            steps{
                script{
                    sh 'docker stop my-nestjs-app || true'
                    sh 'docker rm my-nestjs-app || true'
                    sh 'docker run -d --name my-nestjs-app -p 3000:3000 $DOCKER_IMAGE:latest'
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